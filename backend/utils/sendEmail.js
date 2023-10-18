const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  host: process.env.HOST,
  port: process.env.EMAILPORT,
  secure: process.env.SECURE,
  auth: {
    user: process.env.SENDER,
    pass: process.env.PASS,
  },
});

const sendEmail = (email, subject, verificationLink) => {
  const htmlContent = `
    <p style="font-size: 16px; color: #333;">Welcome to Addis Music</p>
    <p style="font-size: 16px; color: #333;">Please click on the following link to verify your email address:</p>
    <a href="${verificationLink}" style="font-size: 16px; color: #007bff; text-decoration: none;">Verify Email</a>
  `;
  const mailOptions = {
    from: process.env.SENDER,
    to: email,
    subject: subject,
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error in sending email  " + error);
      return true;
    } else {
      console.log("Email sent: " + info.response);
      return false;
    }
  });
};

module.exports = sendEmail;
