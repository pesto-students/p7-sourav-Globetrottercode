const mongoose = require("mongoose");
const { Schema } = mongoose;

const assetSchema = new Schema({
  assets: Array, // String is shorthand for {type: String}
  equity: Number,
  fixedIncome: Number,
  expenses: Number,
  savings: Number,
  email: String,
  SIP: Number,
});

const Assets = mongoose.model("Asset", assetSchema);

//Add assets
async function addAssets(
  assets,
  equity,
  fixedIncome,
  expenses,
  savings,
  email,
  SIP
) {
  if ((await userAssetExists(email)) === false) {
    console.log("adding asset");
    const newAsset = new Assets();
    newAsset.assets = assets;
    newAsset.equity = equity;
    newAsset.fixedIncome = fixedIncome;
    newAsset.expenses = expenses;
    newAsset.savings = savings;
    newAsset.email = email;
    newAsset.SIP = SIP;
    await newAsset.save();
    return `User asset succesfully added`;
  } else {
    console.log("not adding asset");
    return `User asset exists already you can update the existing file`;
  }
}

// addAssets(["No Assets Added"], 0, 0, 0, 0, "abc@souvik.com", 0);

//get all assets
async function getAssets() {
  const assets = await Assets.find();
  return assets;
}

//get user specific asset
async function getUserAsset(email) {
  const assets = await getAssets();
  for (const asset of assets) {
    if (asset.email === email) {
      return asset;
    }
  }
  return `User asset file doesn't exist, create your asset file`;
}

//check id user asset exists
async function userAssetExists(email) {
  const assets = await getAssets();
  for (const asset of assets) {
    if (asset.email === email) {
      return true;
    }
  }
  return false;
}

//update user asset
async function updateUserAsset(
  assets,
  equity,
  fixedIncome,
  expenses,
  savings,
  email,
  SIP,
  actualMail
) {
  let result;
  if (assets)
    result = await Assets.findOneAndUpdate(
      { email: actualMail },
      { assets: assets }
    );
  if (equity)
    result = await Assets.findOneAndUpdate(
      { email: actualMail },
      { equity: equity }
    );
  if (fixedIncome)
    result = await Assets.findOneAndUpdate(
      { email: actualMail },
      { fixedIncome: fixedIncome }
    );
  if (expenses)
    result = await Assets.findOneAndUpdate(
      { email: actualMail },
      { expenses: expenses }
    );
  if (savings)
    result = await Assets.findOneAndUpdate(
      { email: actualMail },
      { savings: savings }
    );
  if (SIP)
    result = await Assets.findOneAndUpdate({ email: actualMail }, { SIP: SIP });
  if (email)
    result = await Assets.findOneAndUpdate(
      { email: actualMail },
      { email: email }
    );
  if (email) {
    return await getUserAsset(email);
  } else {
    return await getUserAsset(actualMail);
  }
}

async function deleteAsset(email) {
  let result = await Assets.deleteOne({ email: email });
  return await result;
}

module.exports.getAssets = getAssets;
module.exports.addAssets = addAssets;
module.exports.getUserAsset = getUserAsset;
module.exports.Assets = Assets;
module.exports.updateUserAsset = updateUserAsset;
module.exports.deleteAsset = deleteAsset;
