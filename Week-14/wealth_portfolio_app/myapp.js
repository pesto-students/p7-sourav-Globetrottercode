#!/usr/bin/env node
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const genl_routes = require("./router/general.js").general;
const regd_users = require("./router/authenticated").authenticated;
const records_route = require("./router/income-expense").records_route;
const { Schema } = mongoose;
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/customer",
  session({
    secret: "fingerprint_customer",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/customer/auth/*", function auth(req, res, next) {
  if (req.session.authorization) {
    token = req.session.authorization["accessToken"];
    jwt.verify(token, "access", (err, user) => {
      if (!err) {
        req.user = user;
        next();
      } else {
        return res.status(403).json({ message: "User not authenticated" });
      }
    });
  } else {
    return res.status(403).json({ message: "User not logged in" });
  }
});

app.get("/", (req, res) => {
  res.write("Hello World \n");
  res.end("Lets make a Wealth Porfolio App");
});

app.use("/", genl_routes);
app.use("/customer", regd_users);
app.use("/customer/auth/records", records_route);

app.listen(PORT, () => {
  console.log(`Sever connected at PORT : ${PORT}`);
});
