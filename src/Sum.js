import React from 'react';

export default function Sum(props) {

	
	return (
		
		<div>
			Sum <h1>{props.numbers.reduce((prev, curr) => prev + curr)}</h1>
		</div>
	);
}
