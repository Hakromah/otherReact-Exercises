import React from 'react';
import {useState} from "react"
import GithubUser from './GithubUsers';

export default function App() {
	const [state, setState] = useState([])

	const handleOnchange = (e) => {
		setState(e.target.value)
	}

	// const handleClick = () => {
   //   setState(state)
	// }

	return (
		<div>
			<input onChange={handleOnchange} type="text" value={state}/>
			{/* <button onClick={handleClick}>Click</button> */}
			<GithubUser username={state}/>
		</div>
	);
}


