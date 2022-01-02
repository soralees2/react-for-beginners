import {useEffect, useState} from "react";

function App() {
	
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");

	const onClick = () => setValue((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);
 
	useEffect(() => {
		console.log("I run only once");
	}, []);
	useEffect(() => {
		console.log("I run when 'keyword' changes.");
	}, [keyword]);
	useEffect(() => {
		console.log("I run when 'counter' changes");
	}, [counter]);
	useEffect(() => {
		console.log("I run when 'keyword' & 'counter' changes");
	}, [keyword, counter]);


	return (
		<div>
			<h1>{counter}</h1>
			<input 
				type="text" 
				value={keyword} 
				onChange={onChange} 
				placeholder="Search here..." 
			/>
			<button onClick={onClick}>click me</button>
		</div>
	);
}

export default App;
