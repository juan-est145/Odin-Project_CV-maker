import { FormSection, FormInfo } from "./formSection";
import "../../styles/form.css"

let confirmBtnClass = "confirmBtn";
let resetBtnClass = "resetBtn";

export default function Form({
	genInfoState,
	setGenInfo,
	eduState,
	setEdu,
	workState,
	setWork
}) {
	return (
		<aside>
			<GeneralInfo setGenInfo={setGenInfo} genInfoState={genInfoState}></GeneralInfo>
			<Education eduState={eduState} setEdu={setEdu}></Education>
			<WorkExperience workState={workState} setWork={setWork}></WorkExperience>
		</aside>
	)
}

function GeneralInfo({ setGenInfo, genInfoState }) {
	const firstInput = [new FormInfo(
		"firstName", "text", "First name"
	), new FormInfo(
		"lastName", "text", "Last name"
	), new FormInfo(
		"location", "text", "Location"
	), new FormInfo(
		"description", "text", "Description"
	), new FormInfo(
		"telephone", "tel", "Telephone"
	), new FormInfo(
		"email", "email", "Email"
	), new FormInfo(
		"linkedin", "url", "Linkedin"
	)];

	function genInfoCallbck(e) {
		setGenInfo({ ...genInfoState, [e.target.id]: e.target.value })
	}

	return (
		<>
			<h3>General information</h3>
			<form action="post">
				<fieldset>
					<FormSection information={firstInput} callBack={genInfoCallbck}></FormSection>
					<div>
						<button className={confirmBtnClass}>Confirm</button>
						<button className={resetBtnClass}>Reset</button>
					</div>
				</fieldset>
			</form>
		</>
	);
}

function Education({ eduState, setEdu }) {
	const studyInformation = [new FormInfo(
		"studyTitle", "text", "Title of degree"
	), new FormInfo(
		"startDate", "date", "Start date"
	), new FormInfo(
		"endDate", "date", "end-date"
	), new FormInfo(
		"descriptionTitle", "area-text", "Description of the title", true
	)];

	function educationCallbck(e) {
		setEdu({ ...eduState, [e.target.id]: e.target.value })
	}

	return (
		<>
			<h3>Education background</h3>
			<form action="post">
				<fieldset>
					<FormSection information={studyInformation} callBack={educationCallbck}></FormSection>
					<div>
						<button className={confirmBtnClass}>Confirm</button>
						<button className={resetBtnClass}>Reset</button>
					</div>
				</fieldset>
			</form>
		</>
	)
}

function WorkExperience({ workState, setWork }) {
	const workInformation = [new FormInfo(
		"companyName", "text", "Company name"
	), new FormInfo(
		"positionTitle", "text", "Position title"
	), new FormInfo(
		"workDesc", "text", "Main responsabilities on job", true
	)];

	function workCallbck(e) {
		setWork({ ...workState, [e.target.id]: e.target.value })
	}

	return (
		<>
			<h3>Work experience</h3>
			<form action="post">
				<fieldset>
					<FormSection information={workInformation} callBack={workCallbck}></FormSection>
					<div>
						<button className={confirmBtnClass}>Confirm</button>
						<button className={resetBtnClass}>Reset</button>
					</div>
				</fieldset>
			</form>
		</>
	)
}