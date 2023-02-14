import React from 'react';

import {useState} from "react"
import GithubUser from './GithubUsers';



// username="Hakromah"
export default function App() {
	const [state, setState] = useState()

	const handleOnchange = (e) => {
		setState(e.target.value)
	}

	const handleClick = (e) => {
		let user = e.target.value;
      setState(user)
		console.log(	`login from app`,state);
	}

	return (
		<div>
			<input onChange={handleOnchange} type="text"  value={state}/>
			<button onClick={handleClick}>Click</button>
			<GithubUser username={state}/>
		</div>
	);
}


