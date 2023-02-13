import React, { useEffect, useState } from 'react';

export default function GithubUser({ user}) {
	const [userInfo, setUserInfo] = useState();

	useEffect(() => {
		fetch(`https://api.github.com/users/${user}`)
			.then((response) => response.json())
			.then((data) => {
				setUserInfo(data);
				console.log(data)//! console log to check if it receives the data
			});
	}, [user])

	useEffect(() => {
		if (user.length > 0) {
			localStorage.setItem('items', JSON.stringify(user));
		}
	}, [user]);

	useEffect(() => {
		let getData = JSON.parse(localStorage.getItem('items'));
		if (getData) {
			setUserInfo([getData]);
		}
	}, []);

	return (
		<div>
			<h2>
			{userInfo && userInfo.name}
		</h2>
		</div>
	);
}
