import React from 'react';


export default function Sum({ numbers }) {
	return (
		<div>
			<h1>{numbers.reduce((prev, curr) => prev + curr, 0)}</h1>
		</div>
	)
}


