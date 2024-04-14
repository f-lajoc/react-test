//testing out class component

//need to import react and the class component first
import React, { Component } from "react";

//to bcome react component, it needs to extend component class from react
class Welcome extends Component {
	//needs to implement render method that will return null or some HTML
	render() {
		return <h2>Ich liebe dich</h2>;
	}
}
export default Welcome;
