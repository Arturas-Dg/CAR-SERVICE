"use client";

import React, { useState } from "react";

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

		try {
			const response = await fetch("http://localhost:3008/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const result = await response.json();
			alert(result.message); // Success or error message
		} catch (error) {
			console.error("Error sending email:", error);
			alert("Failed to send email");
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
