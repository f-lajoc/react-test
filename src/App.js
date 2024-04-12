import "./App.css";
import Greet from "./components/Greet";

function App() {
	const usingDynamicValue = "Component";
	const link = "https://www.google.com";

	return (
		<div className="App">
			<div className="content">
				{/* Working with dynamic values start*/}
				<div className="dynamicValue">
					<h1>Fuctional {usingDynamicValue} </h1>
					<p>
						{
							"I used dynamic value for ' Component' above, check code. This paragraph is also added using dynamic value."
						}
					</p>
					<p>Random-Number: {Math.random(10) * 10}</p>
					
					<a href={link}>Google search</a>
					
				</div>
				{/* Working with dynamic values end*/}

				<Greet></Greet>
			</div>
		</div>
	);
}

export default App;
