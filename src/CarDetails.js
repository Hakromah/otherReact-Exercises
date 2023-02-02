import React, { useEffect, useRef } from 'react';

export default function CarDetails(props) {
	const model = useRef(null);
	const year = useRef(null);
	const color = useRef(null);

	function handleSubmit() {
		console.log(model.current.value);
		console.log(year.current.value);
		console.log(color.current.value);
	}

	useEffect(() => {
		handleSubmit();
	}, []);

	return (
		<form >
			
			<input type="text" ref={model} defaultValue={props.initialModel} /> <br />
			<input type="date" ref={year} defaultValue={props.initialYear} /> <br />
			<input type="color" ref={color} defaultValue={props.initialColor} />
         <button onClick={handleSubmit}>Submit</button>
		</form>
	);
}
