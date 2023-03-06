import Image from "next/image";

export default function ProjectItem({data}){
	const title = data.properties.Name.title[0].plain_text
	const description = data.properties.description.rich_text[0].plain_text
	const imgSrc = data.cover.file?.url || data.cover.external.url
	const tags = data.properties.Tags.multi_select
	const lifeperiodStart = data.properties.lifeperiod.date.start
	const lifeperiodEnd = data.properties.lifeperiod.date.end === null ? "현재" : data.properties.lifeperiod.date.end
	const relationship = data.properties.relationship.checkbox == true ? "좋음" : "관계회복 노력중"

	const calculatedPeriod = (lifeperiodStart, lifeperiodEnd) => {
		const date = new Date();
		const year = date.getFullYear();
		const month = ('0' + (date.getMonth() + 1)).slice(-2);
		const day = ('0' + date.getDate()).slice(-2);
		const dateStr = year + '-' + month + '-' + day;

		const endToday = dateStr.split('-');
		// const startDateStringArray = lifeperiodStart.substr(0,4)
		// const endDateStringArray = lifeperiodEnd == "현재" ? todayDate.getFullYear() : lifeperiodEnd.substr(0,4)
		const startDateStringArray = lifeperiodStart.split('-')
		const endDateStringArray = lifeperiodEnd == "현재" ? endToday : lifeperiodEnd.split('-');

		var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
		var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

		console.log(`lifeperiodEnd: ${lifeperiodEnd}`)
		console.log(`startDate: ${startDateStringArray}`)
		console.log(`endDate: ${endDateStringArray}`)

		// const result = Math.abs(endDateStringArray - startDateStringArray);
		const diffInMs = Math.abs(endDate - startDate);
		const result = diffInMs / (1000 * 60 * 60 * 24) / 365;

		console.log(`기간 : ${result}`)
		return Math.floor(result);
	};

	return (
		<div className="project-card">
			<Image
				className="rounded-t-xl"
				src={imgSrc}
				alt="cover image"
				width="100"
				height="100"
				layout="responsive"
				objectFit="cover"
				quality={100}
			/>

			<div className="p-4 flex flex-col">
				<h1 className="text-2xl font-bold">{title}</h1>
				<h4 className="mt-4 text-xl">{lifeperiodStart} ~ {lifeperiodEnd} (만{calculatedPeriod(lifeperiodStart, lifeperiodEnd)}세)</h4>
				<h3 className="mt-4 text-xl">{description}</h3>
				<h4 className="mt-4 text-xl">우리사이 : {relationship}</h4>
				<div className="flex items-start mt-2">
					{tags.map((aTag) => (
						<h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
					))}
				</div>
			</div>

		</div>
	);
}
