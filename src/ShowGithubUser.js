import React from 'react';

import { useParams } from 'react-router-dom';

function ShowGithubUser() {
	const { user} = useParams();
	return (
		<div>
		   {user}
		</div>
	);
}

export default ShowGithubUser;