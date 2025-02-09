"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const FormPanel = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		problem: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const templateParams = {
			user_name: formData.name,
			user_phone: formData.phone,
			user_email: formData.email,
			user_problem: formData.problem,
		};

		setFormData({
			name: "",
			phone: "",
			email: "",
			problem: "",
		});
		try {
			const response = await emailjs.send(
				"car-service",
				"template_7b7w2ca",
				templateParams,
				"KqvVvecA6yf_VNWgd"
			);
			console.log("Email sent successfully!", response);
			alert(
				"Message sent successfully! We will contact you in the next 1-5 days"
			);
		} catch (error) {
			console.error("Error sending email:", error);
			alert("Failed to send email.");
		}
	};

	return (
		<div className="form-part">
			<form onSubmit={handleSubmit} className="inner-form">
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					value={formData.name}
					onChange={handleChange}
					required
					className="text-field"
				/>
				<input
					type="tel"
					name="phone"
					placeholder="Phone Number"
					value={formData.phone}
					onChange={handleChange}
					required
					className="text-field"
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					value={formData.email}
					onChange={handleChange}
					required
					className="text-field"
				/>
				<textarea
					name="problem"
					placeholder="Tell us your problem..."
					value={formData.problem}
					onChange={handleChange}
					required
					className="problem-field"
				/>
				<button type="submit" className="form-button">
					Book a Visit
				</button>
			</form>
		</div>
	);
};

export default FormPanel;
