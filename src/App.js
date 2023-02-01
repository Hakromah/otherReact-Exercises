import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Counter } from './Counter';
import GithubUserList from './GithubUserList';
import ShowGithubUser from './ShowGithubUser';
import Welcome from './Welcome';

export default function App() {
	return (
		<div>
			<Link to="/">Welcome</Link>
			<br />
			<Link to="/counter">Counter</Link>
			<br />
			<Link to="/user">Show Github User</Link>
			<Routes>
				<Route path="/" element={<Welcome name="Hassan" />} />
				<Route path="/counter" element={<Counter />} />
				<Route path=":users" element={<GithubUserList />}>
					<Route path="username" element={<ShowGithubUser />} />
				</Route>
			</Routes>
		</div>
	);
}
