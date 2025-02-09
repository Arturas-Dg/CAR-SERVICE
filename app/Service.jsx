export default function Service(...data) {
	return (
		<div className="service">
			<img
				src={data[0].image}
				width="100px"
				height="100px"
				alt="service"
				className="service-image"
			/>
			<div>Hi</div>
			{console.log(data[0].image)}
		</div>
	);
}
