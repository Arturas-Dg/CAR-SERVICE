import React from "react";

export default function Ratings(...data) {
	return (
		<div className={data[0].className}>
			<text>{data[0].text}</text>
			<div>{data[0].numbers}</div>
		</div>
	);
}
