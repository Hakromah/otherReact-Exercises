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
			<Link to="/users">Show Github User</Link>
			<Routes>
				<Route path="/" element={<Welcome name="Hassan S Kromah" />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/users" element={<GithubUserList/>}>
               <Route index element={<p style={{fontWeight: "bold"}}>Select the users</p>}/>
               <Route path=":user" element={<ShowGithubUser />} />
				</Route>
			</Routes>
		</div>
	);
}
