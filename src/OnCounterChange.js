import React, { useState } from 'react';
import { ClickCounter } from './ClickCounter ';

export default function OnCounterChange() {
	const [count, setCount] = useState(0);
	const OnCounterChange = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div>
			<h1>OnCounterChange: {count}</h1>
			<ClickCounter OnCounterChange={OnCounterChange} />
		</div>
	);
}
