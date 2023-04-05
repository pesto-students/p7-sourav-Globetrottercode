const express = require("express");
const public_users = express.Router();
const mongoose = require("mongoose");
const User = require("../model/users").User;
const UserExists = require("../model/users").UserExists;
const addUser = require("../model/users").addUser;

function doesExist(email) {
  for (const user of users) {
    if (email === user.email) {
      return true;
    }
  }
  return false;
}

public_users.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  console.log(email, password);
  if (email && password) {
    console.log(email);
    const user_Exists = await UserExists(email);
    if (user_Exists === false) {
      addUser(fname, lname, email, password);
      res.status(200).json({ message: "User Succesfully Registered" });
    } else {
      res.status(404).json({ message: "User already exist" });
    }
  } else {
    res.status(404).json({ message: "Cannot register User" });
  }
});

module.exports.general = public_users;

// if (!doesExist(email)) {
//   users.push({ email, password });
//   console.log(users);
//   return res
//     .status(200)
//     .json({ message: "User registered succesfully, NOw you can login" });
// } else {
//   return res.status(404).json({ message: "User already exists" });
// }
