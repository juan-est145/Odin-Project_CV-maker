import "../styles/cv.css"

export default function CV({ genInfoState, eduState, workState }) {
	return (
		<GeneralInfoCV genInfoState={genInfoState}></GeneralInfoCV>
	)
}

function GeneralInfoCV({ genInfoState }) {
	let emailSvg = <svg fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"></path> </g></svg>;


	if (!genInfoState.showInfo)
		return (null);
	return (
		<section className="genInfo">
			<h1>{`${genInfoState.firstName} ${genInfoState.lastName}`}</h1>
			<h3>Contact information</h3>
			<div className="contactInfo">
				{genInfoState.email && (
					<div>
						{emailSvg}
						<span>{genInfoState.email}</span>
					</div>
				)}
				<div>
					<span>{genInfoState.telephone}</span>
				</div>
				<div>
					<span>{genInfoState.location}</span>
				</div>
				<div>
					<span>{genInfoState.linkedin}</span>
				</div>
			</div>
			<div>
				<h3>About me</h3>
				<p>{genInfoState.description}</p>
			</div>
		</section>
	)
}


