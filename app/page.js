"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";

import FormPanel from "./formPanel";

import Ratings from "./Ratings";
import Service from "./Service";

export default function Home() {
	const serviceText = [
		"Oil & Filter Change, Fluid Level Checks & Top-Ups, Seasonal Car Checkups (Winter/Summer Preparation)",
		"Engine Repair & Tune-Ups, Transmission Repair & Fluid Change, Timing Belt & Chain Replacement, Fuel System Cleaning",
		"Brake Pad & Rotor Replacement, Brake Fluid Flush, ABS System Diagnostics,  Wheel Alignment & Balancing",
		"Tire Rotation & Balancing, Tire Replacement & Installation, Wheel Alignment, Flat Tire Repair",
		"AC System Recharge & Repair, Heating System Diagnostics, Cabin Air Filter Replacement",
		"Exhaust System Repair,  Muffler Replacement, Catalytic Converter Repair, Emission Testing & Inspection",
	];

	const formRef = useRef(null); // Create a ref for the FormPanel

	const handleScrollToForm = () => {
		if (formRef.current) {
			formRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	function checkButton() {
		console.log("Clicked!");
	}

	return (
		<div className="pages">
			<div className="front-page">
				<div className="main-part">
					<header className="main-header">
						<Image
							src="/logo.png"
							alt="car service logo"
							width={120}
							height={100}
							className="main-logo"
						/>
						<div>Johnny's auto</div>
					</header>
					<h1 className="main-phrase">Leave your automobile to us</h1>
					<h3 className="main-text">
						Our car service provides professional Expert car care, fast service,
						reliable repairs, smooth rides, stress-free maintenance, and happy
						customers
					</h3>
					<button className="main-button" onClick={handleScrollToForm}>
						Register
					</button>
				</div>
			</div>
			<div className="ratings-panel">
				<Ratings
					className="successful-repairs"
					text="Succesful repairs"
					numbers="550+"
				/>

				<div className="divider" />
				<Ratings
					className="successful-repairs"
					text="Our ratings"
					numbers="4.95/5 On Google Reviews"
				/>
				<div className="divider" />
				<Ratings
					className="successful-repairs"
					text="Recommend our service"
					numbers="500+"
				/>
			</div>
			<div className="services-page">
				<div className="services-header">Services for your car</div>
				<div className="services">
					<Service image="/oil.png" text={serviceText[0]} />
					<Service image="/engine.png" text={serviceText[1]} />
					<Service image="/brakes.png" text={serviceText[2]} />
					<Service image="/tyres.png" text={serviceText[3]} />
					<Service image="/air-conditioning.png" text={serviceText[4]} />
					<Service image="/exhaust.png" text={serviceText[5]} />
				</div>
			</div>
			<div className="contact-page" ref={formRef}>
				<div className="contact-part">
					<div className="contact-info">
						<div className="contact-us-text">Contact us</div>
						<div>+370 000 0000</div>
						<div>Johnnysauto@gmail.com</div>
					</div>
					<FormPanel />
				</div>
			</div>
		</div>
	);
}
