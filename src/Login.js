import React, { Component } from 'react';

export class Login extends Component {
	state = {
		username: '',
		password: '',
		remember: false,
		disabled: true,
	};

	handleOnChange = (evt) => {
		const { name, value, type, checked } = evt.target;
		this.setState({
			[name]: type === 'checkbox' ? checked : value,
		});

		if (this.state.username === '' || this.state.password === '') {
			this.setState({
				disabled: true,
			});
		} else {
			this.setState({
				disabled: false,
			});
		}
	};
	//! to reset the form whe after the submition
	handleClick() {
		this.setState({
			username: '',
			password: '',
			remember: false,
			disabled: true,
		});
	}
	//! OnLogin function

	render() {
		let { username, password, remember } = this.state;
		return (
			<div>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleOnChange}
				/>
				<br />

				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleOnChange}
				/>
				<br />

				<label htmlFor="checkbox">Remember: </label>
				<input
					type="checkbox"
					name="remember"
					checked={this.state.remember}
					onChange={this.handleOnChange}
				/>
				<br />

				<button
					onClick={() => {
						this.handleClick();
						this.props.onLogin({ username, password, remember });
					}}
					disabled={this.state.disabled}
				>
					Login
				</button>
			</div>
		);
	}
}
export default Login;

// import React, { Component } from 'react';

// export class Login extends Component {
// 	state = {
// 		username: '',
// 		password: '',
// 		remember: false,
// 		disabled: true,
// 	};

// 	handleOnChange = (evt) => {
// 		const { name, value, type, checked } = evt.target;
// 		this.setState({
// 			[name]: type === 'checkbox' ? checked : value,
// 		});

// 		if (this.state.username === '' || this.state.password === '') {
// 			this.setState({
// 				disabled: true,
// 			});
// 		} else {
// 			this.setState({
// 				disabled: false,
// 			});
// 		}
// 	};

// 	//!OnLogin function

// 	render() {
// 		let { username, password, remember } = this.state;
// 		return (
// 			<div>
// 				<label htmlFor="username">Username: </label>
// 				<input
// 					type="text"
// 					name="username"
// 					value={this.state.username}
// 					onChange={this.handleOnChange}
// 				/>
// 				<br />

// 				<label htmlFor="password">Password: </label>
// 				<input
// 					type="password"
// 					name="password"
// 					value={this.state.password}
// 					onChange={this.handleOnChange}
// 				/>
// 				<br />

// 				<label htmlFor="checkbox">Remember: </label>
// 				<input
// 					type="checkbox"
// 					name="remember"
// 					checked={this.state.remember}
// 					onChange={this.handleOnChange}
// 				/>
// 				<br />
// 				<button
// 					onClick={() => this.props.onLogin({username, password, remember})}
// 					disabled={this.state.disabled}
// 				>
// 					Login
// 				</button>
// 			</div>
// 		);
// 	}
// }

// export default Login;
