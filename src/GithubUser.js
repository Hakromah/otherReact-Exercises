import React, { useEffect, useState } from 'react';

export default function GithubUser({ setUser, user }) {
	const [search, setSearch] = useState('');

	const handleClick = () => {
		//Preventing empty form submition
		if (!search) {
			alert('Enter Github username ....');
			return;
		}

		//fetching
		fetch(`https://api.github.com/users/${search}`)
			.then((response) => response.json())
			.then((data) => {
				setUser((prev) => [...prev, data]);
			});
		setSearch('');
	};

	useEffect(() => {
		if (user.length > 0) {
			localStorage.setItem('items', JSON.stringify(user));
		}
	}, [user]);

	useEffect(() => {
		let getData = JSON.parse(localStorage.getItem('items'));
		if (getData) {
			setUser(getData);
		}
	}, []);

	return (
		<div>
			<h1 style={{ color: 'purple' }}>Github Users</h1>

			<input
				type="text"
				name="name"
				value={search}
				onChange={(evt) => setSearch(evt.target.value)}
			/>
			<button onClick={handleClick}>Search</button>
		</div>
	);
}
