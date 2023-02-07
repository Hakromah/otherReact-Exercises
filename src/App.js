import React from 'react';
import Login from './Login';

export class App extends React.Component {
	onLoginFunction(loginState) {
		console.log(loginState);
	}

	render() {
		return (
			<div>
				<Login onLogin={this.onLoginFunction} />
			</div>
		);
	}
}
