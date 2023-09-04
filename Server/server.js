import express from 'express';
import validator from 'validator';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.PASSWORD,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
  }

  console.log(req.body);

  try {
      await transporter.sendMail({
          from: email,
          to: process.env.GMAIL_ID,
          subject: 'New Contact Form Submission',
          html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
      });

      console.log('Email sent successfully');
      res.status(200).json({ message: 'Form submitted and email sent successfully' });
  } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));