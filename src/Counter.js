import React, { useCallback, useState } from 'react';

function useCounter(initialValue) {
	const [counter, setCounter] = useState(initialValue);

	const handleIncreament = useCallback(function handleIncreament() {
		setCounter((c) => c + 1);
	}, [])

	const handleDecreament = useCallback(function handleDecreament() {
		setCounter((c) => c - 1);
	}, [])

	const handleReset = useCallback(function handleReset() {
		setCounter(initialValue);
	}, [initialValue])

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
