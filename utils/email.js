const nodemailer = require('nodemailer');
const sendEmail = async options => {
    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
        service :"gmail",
        auth: {
            user: "adulapuramniharika2@gmail.com",
            pass: "dkra fhqs fjsz zaow"
        }
    });

    // 2) Define the email options
    const mailOptions = {
        from: 'niharika adulapuramniharika2@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;