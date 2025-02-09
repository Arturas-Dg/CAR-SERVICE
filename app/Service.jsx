export default function Service(...data) {
	return (
		<div className="service">
			<img
				src={data[0].image}
				width="100px"
				height="100px"
				alt="service"
				className="service-image"
				key={data[0].image}
			/>
			<div className="service-text" key={data[0].text}>
				{data[0].text}
			</div>
			{console.log(data[0].text)}
		</div>
	);
}
