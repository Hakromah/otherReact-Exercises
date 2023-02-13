import React, { useState } from 'react';
import GithubUser from './GithubUser';

export default function GithubuserList() {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState([]);

	return (
		<div>
			<h1 style={{ color: 'purple' }}>Github Users</h1>
			<input
				type="text"
				name="name"
				value={search}
				onChange={(evt) => setSearch(evt.target.value)}
			/>
			<button onClick={() => setUsers([search, ...users], setSearch(''))} >Search</button>
			{users && users.map((usr, i) => (
				<GithubUser key={i} user={usr} />
			))}
		</div>
	);
}
