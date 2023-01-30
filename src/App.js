import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Counter } from './Counter';
import { GithubUserList } from './GithubUserList';
import ShowGithubUser from './ShowGithubUser';
import Welcome from './Welcome';

function App() {
	return (
		<div>
			<Link to="/">Welcome</Link>
			<br />
			<Link to="/counter">Counter</Link>
			<br />
			<Link to="/showGithubUser">Show Github User</Link>
			<Routes>
				<Route path="/" element={<Welcome name="Hassan" />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/showGithubUser" element={<GithubUserList/>}>
					<Route path=':users' element={<ShowGithubUser/>}/>
				</Route>
				<Route
					path="*"
					element={
						<div>
							<p>
								<h1>404</h1>
								Page not found
							</p>
						</div>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
