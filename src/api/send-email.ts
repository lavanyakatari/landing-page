
import { NextApiRequest, NextApiResponse } from 'next'; // Import correct types
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter using Gmail as the email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Your Gmail email address
        pass: process.env.EMAIL_PASS,  // Your Gmail App Password
      },
    });

    // Set up the email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,  // Your email where the message will be sent
      subject: `New message from ${name}`,
      text: `You received a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send message.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
