import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

function App() {
	const usingDynamicValue = "Component";
	const link = "https://www.google.com";

	return (
		<div className="App">
			<Navbar/>
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
				<Welcome></Welcome>
			</div>
		</div>
	);
}

export default App;
