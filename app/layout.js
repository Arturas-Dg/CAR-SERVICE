import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto, Arvo } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const arvo = Arvo({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata = {
	title: "Johnny's Auto",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${arvo.variable}`}>
				{children}
			</body>
		</html>
	);
}
