import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

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
			<ul>
				{user &&
					user.map((user, i) => (
						<li key={i}>
							<Link to={`/users/${user.login}`}>{user.login}</Link>
						</li>
					))}
			</ul>
			<Outlet />
		</div>
	);
}
