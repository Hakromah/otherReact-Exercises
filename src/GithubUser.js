import React, { useEffect, useState } from 'react';

export default function GithubUser({ user }) {
	const [userInfo, setUserInfo] = useState();

	useEffect(() => {
		fetch(`https://api.github.com/users/${user}`)
			.then((response) => response.json())
			.then((data) => {
				setUserInfo(data);
			});
	}, [user]);


	return (
		<div>
			<h2>{userInfo && userInfo.name}</h2>
		</div>
	);
}
