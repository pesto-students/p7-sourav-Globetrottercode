const express = require("express");
const records_route = express.Router();
const createRecord = require("../model/recordSchema").createRecord;
const recordExists = require("../model/recordSchema").recordExists;
const getYearRecords = require("../model/recordSchema").getYearRecord;
const updateRecord = require("../model/recordSchema").updateRecord;
const getMonthRecord = require("../model/recordSchema").getMonthRecord;
const sendMail = require("../email").sendMail;

records_route.get("/", async (req, res) => {
  let message = { mesaage: "Create your records file if not created already" };

  res.json(message);
});

module.exports.records_route = records_route;

records_route.post("/createFile", async (req, res) => {
  let email = req.session.authorization.email;
  console.log(email);
  if (!(await recordExists(email))) {
    const response = await createRecord(email);
    res.send(response);
  } else {
    res.send("record exists");
  }
});

records_route.get("/getYearFile", async (req, res) => {
  let year = req.body.year;
  let email = req.session.authorization.email;
  if (await recordExists(email)) {
    let yearlyRecord = await getYearRecords(year, email);
    let message = {};
    message[year] = await yearlyRecord;
    res.send(await message);
  } else {
    res.send("Create your record file first");
  }
});

records_route.get("/getMonthFile", async (req, res) => {
  let { month, year } = req.body;
  let email = req.session.authorization.email;
  if (month && year) {
    if (await recordExists(email)) {
      let MonthlyRecord = await getMonthRecord(month, year, email);
      let message = {};
      message[`${month},${year}`] = await MonthlyRecord;
      res.send(await message);
    } else {
      res.send("Create your record file first");
    }
  } else {
    res.send("Specify month and year");
  }
});

records_route.put("/updateRecord", async (req, res) => {
  let { year, month, income, expense, savings } = req.body;
  let email = req.session.authorization.email;
  if (year && month && (income || savings || expense)) {
    if (await recordExists(email)) {
      let result = await updateRecord(
        email,
        year,
        month,
        income,
        expense,
        savings
      );
      let message = `<h2><b>Hello User!</b><h2><br><h4>Your Record File at Wealth Portfolio for ${month},${year} has recently been updated</h4>`;
      let subject = "Record File Change";
      let mailRes = await sendMail(email, message, subject);
      res.send(await result);
    } else {
      res.send("Create your record file first");
    }
  } else {
    res.send("Specify month, year and atleast one field to update");
  }
});
