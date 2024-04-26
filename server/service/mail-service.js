const nodemailer = require("nodemailer");
class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: {
        user: "username",
        pass: "password",
      },
    });
  }
  async sendActivationMail(to, link) {}
}
module.exports = new MailService();
