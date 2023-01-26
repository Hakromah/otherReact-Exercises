import React, { useEffect, useState } from 'react';

export const ClickCounter = ({ OnCounterChange }) => {
	const [count, setCount] = useState(0);

	const addNumber = () => {
		setCount((value) => value + 1);
	};
	const decreaseNumber = () => {
		setCount((value) => value - 1);
	};
	useEffect(() => {
		OnCounterChange();
	}, [count]);

	return (
		<div>
			<h1>ClickCounter: {count}</h1>
			<button onClick={addNumber}>Increase</button>
			<button onClick={decreaseNumber}>decrease</button>
		</div>
	);
};
