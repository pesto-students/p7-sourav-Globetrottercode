const mongoose = require("mongoose");
const { Schema } = mongoose;

const user_Schema = new Schema({
  fname: String, // String is shorthand for {type: String}
  lname: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", user_Schema);

async function getUsers() {
  const users = await User.find();
  return users;
}

async function UserExists(email) {
  const users = await getUsers();
  for (let user of users) {
    if (user.email === email) {
      console.log("user exists");
      return true;
    }
  }
  return false;
}

async function authenticatedUser(email, password) {
  const users = await getUsers();
  for (let user of users) {
    if (user.email === email) {
      if (user.password === password) {
        return true;
      }
    }
  }
  return false;
}

function addUser(fname, lname, email, password) {
  const user = new User();
  user.fname = fname;
  user.lname = lname;
  user.email = email;
  user.password = password;
  user.save();
}

module.exports.User = User;
module.exports.UserExists = UserExists;
module.exports.addUser = addUser;
module.exports.authenticatedUser = authenticatedUser;

// const userSchema = new Schema({
//     fname: String, // String is shorthand for {type: String}
//     lname: String,
//     email: String,
//     password: String,
//   });

//   const User = mongoose.model("User", userSchema);
//   const user = new User({
//     fname: "Souvik",
//     lname: "Das",
//     email: "souvikdas",
//     password: "123456",
//   });

//   getusers().then((users) => {
//     for (const user of users) {
//       if (user.email === "souvikdas") {
//         console.log("User Exists cant register");
//         return;
//       }
//     }
//     user.save();
//   });

//   async function getusers() {
//     const users = await User.find();
//     return users;
//   }
