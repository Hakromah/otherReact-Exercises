import React from 'react';

export class Counter extends React.Component {
	state = {
		count: this.props.initialCount,
	};

	constructor(props) {
		super(props);
		setInterval(() => {
			this.setState({
				count: this.state.count + this.props.incrementAmount,
			});
		}, this.props.incrementInterval);
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
			</div>
		);
	}
}
