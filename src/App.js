import {useEffect, useState} from "react";

function Hello() {

	// 방법1
	/* 
	useEffect(() => {
		console.log("Hi :)");
		return () => console.log("Bye :(");
	}, []);
	 */
	
	// 방법2
	useEffect(function(){
		console.log("Hi :)");
		return function(){
			console.log("Bye :(");
		}
	}, []);
	return <h1>Hello</h1>;

}

function App() {
	
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !prev);
	// 받아온 값의 반대값을 return

	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
		</div>
	);
}

export default App;
