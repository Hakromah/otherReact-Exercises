import React from 'react';

// we set default value in an arry box if the props value is not given.
// because we use "reduce " method to the get the sum of an arry. 
export default function Sum(props) {

	
	return (
		
		<div>
			Sum <h1>{props.numbers.reduce((prev, curr) => prev + curr)}</h1>
		</div>
	);
}
