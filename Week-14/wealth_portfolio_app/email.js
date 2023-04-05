var nodemailer = require("nodemailer");

async function sendMail(email = "dassouvik14102000@gmail.com", message) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "dassouvik14102000@gmail.com",
      pass: "bkcpbpixofdogwag",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Wealth Portfolio 💰" <dassouvik14102000@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Asset File Change", // Subject line
    text: "Some message", // plain text body
    html: message, // html body
  });
  console.log("Message sent: %s", info.messageId);
  console.log(await info, "info");
  return await info;
}

module.exports.sendMail = sendMail;
