import React from 'react';

import { useParams } from 'react-router-dom';

function ShowGithubUser() {
	const { username} = useParams();
	return (
		<div>
			user {username}
		</div>
	);
}

export default ShowGithubUser;