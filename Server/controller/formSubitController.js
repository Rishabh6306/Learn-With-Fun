import validator from 'validator';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.PASSWORD,
    },
  });

const formSubmit = async (req, res) => {
    const { name, email, message, subject } = req.body;
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    console.log(req.body);

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL_ID,
            subject: subject,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Subject: ${subject}</p><p>Message: ${message}</p>`,
        });

        console.log('Email sent successfully');
        res.status(200).json({ message: 'Form submitted and email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default formSubmit;