require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3008;

// Middleware
app.use(express.json());
app.use(cors());

// Nodemailer transporter (set up your email credentials in a `.env` file)
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

// API route to handle form submission
app.post("/send-email", async (req, res) => {
	const { name, phone, email, problem } = req.body;

	const mailOptions = {
		from: email,
		to: process.env.EMAIL_USER,
		subject: "New Booking Request",
		text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProblem:\n${problem}`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: "Email sent successfully!" });
	} catch (error) {
		res.status(500).json({ message: "Email sending failed", error });
	}
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
