const mongoose = require("mongoose");
const { Schema } = mongoose;

const record_Schema = new Schema({
  email: String,
  Record: Array,
});

const Record = mongoose.model("Record", record_Schema);

////// Record template Logic /////////
let months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

let info = ["income", "expense", "savings"];
let recordFile = {};
for (let i = 2018; i <= 2023; i++) {
  recordFile[i] = {};
  for (let j = 0; j < months.length; j++) {
    recordFile[i][months[j]] = {};
    for (let k = 0; k < info.length; k++) {
      recordFile[i][months[j]][info[k]] = 0;
    }
  }
}

//Create a Record
async function createRecord(email = "abc@gmail.com", record = recordFile) {
  let info = new Record();
  info.email = email;
  info.Record = [record];
  let response = info.save();
  return response;
}

// Get Records
async function getRecords() {
  let records = await Record.find();
  return await records;
}

// Update Records
async function updateRecord(email, year, month, income, expense, savings) {
  let result = {};
  month = month.toLowerCase();
  if (month !== "june" && month !== "july") {
    month = month.substring(0, 3);
  }
  if (email && year && month) {
    if (income) {
      let records = await Record.findOne({ email: email });
      records.Record[0][year][month]["income"] = income;
      let res1 = await Record.findOneAndUpdate(
        { email: email },
        { Record: records.Record }
      );
    }
    if (expense) {
      let records = await Record.findOne({ email: email });
      records.Record[0][year][month]["expense"] = expense;
      let res2 = await Record.findOneAndUpdate(
        { email: email },
        { Record: records.Record }
      );
    }
    if (savings) {
      let records = await Record.findOne({ email: email });
      records.Record[0][year][month]["savings"] = savings;
      let res3 = await Record.findOneAndUpdate(
        { email: email },
        { Record: records.Record }
      );
    }
  }
  result[`updated_rec : ${month},${year}`] = await getMonthRecord(
    month,
    year,
    email
  );
  return result;
}

// Check if Record Exists
async function recordExists(email = "abc@gmail.com") {
  let records = await getRecords();
  for (const record of records) {
    if (record.email === email) {
      return true;
    }
  }

  return false;
}

//Get Yearwise Records
async function getYearRecord(year, email) {
  let records = await Record.findOne({ email: email });
  return await records.Record[0][year];
}

//Get Monthwise Records
async function getMonthRecord(month, year, email) {
  let records = await Record.findOne({ email: email });
  month = month.toLowerCase();

  if (month !== "june" && month !== "july") {
    month = month.substring(0, 3);
  }
  return await records.Record[0][year][month];
}

module.exports.createRecord = createRecord;
module.exports.recordExists = recordExists;
module.exports.getYearRecord = getYearRecord;
module.exports.getMonthRecord = getMonthRecord;
module.exports.updateRecord = updateRecord;
