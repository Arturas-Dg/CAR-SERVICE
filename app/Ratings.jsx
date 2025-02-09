import React from "react";

export default function Ratings(...data) {
	return (
		<div className={data[0].className}>
			<div>{data[0].text}</div>
			<div>{data[0].numbers}</div>
		</div>
	);
}
