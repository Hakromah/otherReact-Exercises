import React from 'react';

export default function GithubUser({ users }) {
	return (
		<div>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
