import React from 'react';
import { GithubUser } from './GithubUser';
import { useParams } from 'react-router-dom';

function ShowGithubUser() {
	const { user = 'Hakromah' } = useParams();
	return (
		<div>
			<GithubUser username={user} />
		</div>
	);
}

export default ShowGithubUser;
