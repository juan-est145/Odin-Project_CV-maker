export default function CV({ stateInfo }) {
	return (
			<section>
				{Object.values(stateInfo).map((element, index) => {
					return <h1 key={index}>{element}</h1>;
				})}
			</section>
	)
}