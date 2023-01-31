import React, { useEffect, useState } from 'react';

export default function GithubUserList() {
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
			{user.map((user, i) => (
				<li key={i}>
					{user.login}
				</li>
			))}
		</div>
	);
}
