import React from 'react';

import { Link, useParams } from 'react-router-dom';

function ShowGithubUser() {
	const { user} = useParams();
	return (
		<div>
		<h4 style={{fontWeight:'bold'}}>GithobUserName: {user}</h4>
		<Link to="/users">Back</Link>
		</div>
	);
}

export default ShowGithubUser;