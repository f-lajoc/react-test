
import './App.css';
import Greet from './components/Greet';

function App() {
  let Lajoc = "i see you";
  let Age = 23;
  return (
		<div className="App">
			<div className="content">
        <h1>Fuctional Component {Lajoc} </h1>

        <Greet></Greet>
        <p>You are {Age} years old</p>
			</div>
		</div>
	);
}

export default App;
