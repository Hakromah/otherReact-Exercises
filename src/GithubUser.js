import React, { useEffect, useState } from 'react';

const useGithubUser = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const username = "kam2023";
	function fetchData(username) {
		console.log(username);

		fetch(`https://api.github.com/users/${username}`)
			.then((json) => json.json())
			.then((data) => setData(data));

		if (error) {
			setError(new Error('Data not found'));
		}
		if (!error && !data) {
			setLoading(true);
		}
	}

	useEffect(() => {
		fetchData(username);
	}, []);

	return {
		data,
		error,
		loading,
	};
};

export default function GithubUser() {
	const { data, error, loading } = useGithubUser();

	return (
		<div>
			<h2>Github User Data </h2>
			{error && <h2>Data not fund</h2>}
			{loading && <h2>Data is loading...</h2>}
			<h1 key={data.id}>{data.login}</h1>
		</div>
	);
}
