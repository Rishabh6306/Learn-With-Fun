import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import dotenv from 'dotenv';

dotenv.config();

// Configure nodemailer with Gmail SMTP server details
let transporter = nodemailer.createTransport({
    service: 'Gmail', // Use the Gmail service
    auth: {
        user: process.env.GMAIL_ID, // Your Gmail email address
        pass: process.env.PASSWORD, // Your Gmail password (use an app-specific password for security)
    },
});

transporter.on('log', console.log);

let MailGenerator = new Mailgen({
    theme: 'default',
    product: {
        name: 'Mailgen',
        link: 'https://mailgen.js/'
    }
});

/** POST: http://localhost:3001/api/registerMail */
export const registerMail = async (req, res) => {
    const { username, userEmail, text, subject } = req.body;

    var email = {
        body: {
            name: username,
            intro: text || 'Welcome to Learn With Fun! We\'re very excited to have you on our website.',
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }

    var emailBody = MailGenerator.generate(email);

    let message = {
        from: process.env.GMAIL_ID, // Sender's Gmail email
        to: userEmail, // Recipient's email
        subject: subject || 'Signup Successful',
        html: emailBody
    }

    transporter.sendMail(message)
        .then(() => {
            return res.status(200).send({ msg: 'You should receive an email from us.' });
        })
        .catch(error => {
            res.status(500).send({ error });
        });
}
