// Import necessary libraries and modules
import nodemailer from 'nodemailer'; // Import nodemailer for sending emails
import Mailgen from 'mailgen'; // Import Mailgen for generating HTML emails
import dotenv from 'dotenv'; // Import dotenv for handling environment variables

// Load environment variables from a .env file
dotenv.config();

// Configure nodemailer with SMTP server details
let nodeConfig = {
    host: 'smtp.ethereal.email' , // SMTP server host
    port: 587, // SMTP server port
    secure: false, // Set to true for secure (SSL) connections, false for other ports
    auth: {
        user: process.env.ETHEREAL_USERNAME, // SMTP server username (your email)
        pass: process.env.ETHEREAL_PASSWORD, // SMTP server password (from environment variable)
    }
}


// Create a nodemailer transporter with the configured settings
let transporter = nodemailer.createTransport(nodeConfig);
transporter.on('log', console.log);

// Create a Mailgen instance for generating HTML emails
let MailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Mailgen",
        link: 'https://mailgen.js/'
    }
})

/** POST: http://localhost:3001/api/registerMail */
export const registerMail = async (req, res) => {
    const { username, userEmail, text, subject } = req.body;

    // Body of the email
    var email = {
        body: {
            name: username,
            intro: text || 'Welcome to Learn With Fun! We\'re very excited to have you on our website.',
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }

    // Generate HTML email body using Mailgen
    var emailBody = MailGenerator.generate(email);

    // Define the email message
    let message = {
        from: process.env.ETHEREAL_USERNAME, // Sender's email
        to: userEmail, // Recipient's email
        subject: subject || "Signup Successful", // Email subject (default: "Signup Successful")
        html: emailBody // HTML content of the email body
    }

    // Send the email using the nodemailer transporter
    transporter.sendMail(message)
        .then(() => {
            // Return a success response if the email was sent successfully
            return res.status(200).send({ msg: "You should receive an email from us." })
        })
        .catch(error => {
            // Return an error response if there was an issue sending the email
            res.status(500).send({ error })
        })
}