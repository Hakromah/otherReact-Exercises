import React, { useEffect, useState } from 'react';
import GithubUser from './GithubUser';

export default function GithubuserList() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		fetch(`https://api.github.com/users`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUser(data);
			});
	}, []);

	return (
		<div>
			<GithubUser setUser={setUser} />
			{user.map((item, i) => (
				<li key={i}>{item.login}</li>
			))}
		</div>
	);
}
