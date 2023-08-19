const express = require('express')
const nodeMailer = require("nodemailer");
require('dotenv').config()
const app = express()

module.exports.Mail = async (email, link) => {

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  });

  const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject: "Welcome To Charity Games by Caritas Nostra",
    html: `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caritas Nostra</title>
    <style>
        .center {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5%;
        }

        body {
            padding: 5%;
            background-color: peachpuff;
        }
    </style>
</head>

<body>
    <div class="">
        <div class="center">Logo</div>
        <h1 class="center">Welcome to Caritas Nostra</h1>
        <div class="center">
          <a href=${link}>Click here to complete registration</a>
        </div>
        <div class="center">
        <p>${new Date(Date.now())}</p>
        </div>
        
    </div>
</body>

</html>
`
  };
  try {
    // console.log(process.env.GMAIL_USER, process.env.MAIL_PASSWORD, process.env.EMAIL, email, pin)
    // console.log(mailOption)
    await transporter.sendMail(mailOption);
  } catch (error) {
    return error.message;
  }
};