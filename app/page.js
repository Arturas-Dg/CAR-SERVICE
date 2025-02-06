import Image from "next/image";
import styles from "./page.module.css";

import Ratings from "./Ratings";
import Service from "./Service";

export default function Home() {
	return (
		<div className="pages">
			<div className="front-page">
				<div className="main-part">
					<header className="main-header">
						<Image
							src="/car-service-logo-2.png"
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
					<button className="main-button">Register</button>
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
				<Service />
			</div>
		</div>
	);
}
