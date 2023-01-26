import React from 'react';

// we set default value in an arry box if the props value is not given.
// because we use "reduce " method to the get the sum of an arry. 
export default function Sum({ numbers = [10]}) {
	return (
		<div>
			Sum <h1>{numbers.reduce((prev, curr) => prev + curr)}</h1>
		</div>
	);
}
