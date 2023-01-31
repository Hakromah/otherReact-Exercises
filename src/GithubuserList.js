import React, { useState } from 'react';
import GithubUser from './GithubUser';

export default function GithubuserList() {
	const [user, setUser] = useState([]);

	return (
		<div>
			<GithubUser setUser={setUser} user={user} />
			{user.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</div>
	);
}
