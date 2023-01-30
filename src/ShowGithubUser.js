import React from 'react';

import { useParams } from 'react-router-dom';

function ShowGithubUser() {
	const { users} = useParams();
	return (
		<div>
			user {users}
		</div>
	);
}

export default ShowGithubUser;
