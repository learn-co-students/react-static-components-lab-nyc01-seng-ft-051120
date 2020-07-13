import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js';
// Anything that needs to be evaluated as JS need to go in {} 
import MouseComponent from './MouseComponent.js';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
