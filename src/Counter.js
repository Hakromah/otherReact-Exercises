import React, { useState } from 'react';

function useCounter(initialValue) {
	const [counter, setCounter] = useState(initialValue);

	function handleIncreament() {
		setCounter((c) => c + 1);
	}

	function handleDecreament() {
		setCounter((c) => c - 1);
	}

	function handleReset() {
		setCounter(initialValue);
	}

	return {
		counter: counter,
		onIncreament: handleIncreament,
		onDecreament: handleDecreament,
		onReset: handleReset,
	};
}

export default function Counter({ initialValue = 0 }) {
	const { counter, onIncreament, onDecreament, onReset } =
		useCounter(initialValue);

	return (
		<div>
			<h2>Count: {counter}</h2>
			<button onClick={onIncreament}>Increase</button>
			<button onClick={onDecreament}>Decrease</button>
			<button onClick={onReset}>Reset</button>
		</div>
	);
}
