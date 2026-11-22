import { useState } from "react";
import "./css/style.css"

let PatientForm = () => {

	let [pName, setPName] = useState("");
	let [age, setAge] = useState(0);
	let [dept, setDept] = useState("");
	let [ptnts, setPtnts] = useState([]);

	let handleSubmit = (e) => {
		e.preventDefault();
		console.log({pName, age, dept});
		setPtnts([...ptnts, {pName, age, dept}])
		setPName("");
		setAge(0);
		setDept("");
	}

	let handleDelete = (i) => {
		setPtnts(ptnts.filter((_, idx) => i !== idx));
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Name" value={pName} onChange={(e) => setPName(e.target.value)}/>
				<input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
				<input type="text" placeholder="Department" value={dept} onChange={(e) => setDept(e.target.value)}/>
				<button type="submit">Add Patient</button>
			</form>
			<div>
				<ol>
					{
						ptnts.map((p, i) => {
							return (<li class="test" key={i}>
								<h4>{p.pName}</h4>
								<p>Age: {p.age} ----- Department: {p.dept}</p>
								<button onClick={() => handleDelete(i)}>Delete</button>
							</li>);
						})
					}
				</ol>
			</div>
			<p>Total: {ptnts.length}</p>
		</>
	);
}

export default PatientForm;
