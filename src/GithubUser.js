import React, { useState } from 'react';

export default function GithubUser({setUser}) {
	const [search, setSearch] = useState('');

	const handleClick = () => {
		fetch(`https://api.github.com/users/${search}`)
			.then((response) => response.json())
			.then((data) => {
				setUser(prev => [...prev,data]);
			});
		setSearch('');
	};

	return (
		<div>
			<h1 style={{color: 'purple'}}>Github Users</h1>
			
			<input
				type="text"
				name="name"
				value={search}
				onChange={(evt) => setSearch(evt.target.value)}
			/>
			<button onClick={handleClick}>Search</button>
			<h2>
			
			</h2>
		</div>
	);
}
