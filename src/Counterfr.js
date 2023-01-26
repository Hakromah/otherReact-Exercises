import React, { useEffect, useState } from 'react';

export function Counterfr() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const clearInt = setInterval(() => {
			setCount(count + 1);
		}, 1000);

		return () => clearInterval(clearInt);
	}, [count]);

	return (
		<div>
			<h3> Franch Page </h3>
			<h2>Count:{count}</h2>
			<button>ClearCount</button>
		</div>
	);
}
