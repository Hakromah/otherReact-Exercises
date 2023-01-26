import React, { useEffect, useState } from 'react';
import GithubUser from './GithubUser';

export default function GithubUserList() {
	const [users, setUsers] = useState('');
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	const setData = ({ name }) => {
		setUsers(name);
		console.log(name);
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const submit = (e) => {
		e.preventDefault();
		fetch(`https://api.github.com/users/${search}`)
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
				console.log(data);
			});
	};

	return (
		<div>
			{!users && <h1>404 page</h1>}
			<form onSubmit={submit}>
				<input
					type="text"
					name="name"
					value={search}
					onChange={handleChange}
				/>
				<button>Search</button>
			</form>

			<GithubUser users={users} />
		</div>
	);
}
