import React from 'react';
import Login from './Login';

export class App extends React.Component {
	onLoginFunction = (a, b, c) => {
		console.log(a, b, c);
	};

	render() {
		return (
			<div>
				<Login onLogin={this.onLoginFunction} />
			</div>
		);
	}
}
