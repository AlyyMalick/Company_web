const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "osman@projjexx.co",
    pass: "gmpm wfij rfju eqsw",
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "osman@projjexx.co",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Email not sent");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
