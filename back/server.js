const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.static(path.join(__dirname, '../front')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front', 'indexfr.html'));
});

// Form submission
app.post('/', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    }
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error');
    } else {
      console.log("Email sent with success");
      return res.status(200).send('Success');
    }
  });
});

// Launching the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
