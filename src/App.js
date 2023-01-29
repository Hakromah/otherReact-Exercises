import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Counter } from './Counter';
import ShowGithubUser from './ShowGithubUser';
import Welcome from './Welcome';

function App() {
	return (
		<div>
			<Link to="/">Welcome</Link><br />
			<Link to="/counter">Counter</Link><br />
			<Link to="/showGithubUser">Show Github User</Link>
			<Routes>
				<Route path="/" element={<Welcome name="Hassan" />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/:username" element={<ShowGithubUser />} />
			</Routes>
		</div>
	);
}

export default App;
