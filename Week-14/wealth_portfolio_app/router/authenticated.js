const express = require("express");
const regd_users = express.Router();
const jwt = require("jsonwebtoken");
const authenticatedUser = require("../model/users").authenticatedUser;
const getUserAsset = require("../model/assets").getUserAsset;
const updateUserAsset = require("../model/assets").updateUserAsset;
const deleteAsset = require("../model/assets").deleteAsset;
const addAssets = require("../model/assets").addAssets;
const getAssets = require("../model/assets").getAssets;
const Assets = require("../model/assets").Assets;
const User = require("../model/users").User;
const UserExists = require("../model/users").UserExists;
const sendMail = require("../email").sendMail;

//Only registered users can login
regd_users.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(404).json({ message: "Error logging in" });
  }
  if (await authenticatedUser(email, password)) {
    let accessToken = jwt.sign(
      {
        data: password,
      },
      "access",
      { expiresIn: 60 * 60 }
    );
    req.session.authorization = {
      accessToken,
      email,
    };
    return res.status(200).send("User successfully logged in");
  } else {
    return res
      .status(208)
      .json({ message: "Invalid Login. Check email and password" });
  }
});
//get asset
regd_users.get("/auth/assets", async (req, res) => {
  const email = req.session.authorization.email;
  const asset = await getUserAsset(email);
  res.send(asset);
});

regd_users.post("/auth/assets", async (req, res) => {
  console.log("hello");
  const {
    assets,
    equity,
    fixedIncome,
    expenses,
    savings,
    email = req.session.authorization.email,
    SIP,
  } = req.body;
  const status = await addAssets(
    assets,
    equity,
    fixedIncome,
    expenses,
    savings,
    email,
    SIP
  );
  res.send(status);
});

//update asset
regd_users.put("/auth/assets/update", async (req, res) => {
  const { assets, equity, fixedIncome, expenses, savings, email, SIP } =
    req.body;
  let actualMail = req.session.authorization.email;
  let result;
  result = await updateUserAsset(
    assets,
    equity,
    fixedIncome,
    expenses,
    savings,
    email,
    SIP,
    actualMail
  );
  let message = "Your asset file at Wealth Portfolio has recently been updated";
  let mailRes = await sendMail(actualMail, message);
  res.send(await result);
});

regd_users.delete("/auth/assets/del", async (req, res) => {
  let email = req.session.authorization.email;
  let result = await deleteAsset(email);
  res.send(await result);
});

module.exports.authenticated = regd_users;
