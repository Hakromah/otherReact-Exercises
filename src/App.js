import React, { useRef, useState } from 'react';
import GithubUser from './GithubUser';


export default function App() {
	const [user, setUser] = useState()
	const inputRef = useRef()

	function handleRef() {
		let user = inputRef.current.value
		setUser(user);
		
	}

	return (
		<div>
		<input ref={inputRef} autoFocus></input>
		<button onClick={handleRef}>SaveGithubUser</button>
		<GithubUser user={user}/>
		</div>
	);
}
