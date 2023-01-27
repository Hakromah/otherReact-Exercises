import React, { useEffect, useState } from 'react';

export const GithubUser = ({ username }) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(null);

	async function fetchData() {
		try {
			const getData = await fetch(
				`https://api.github.com/users/${username}`
			);
			const json = await getData.json();
			setData(json);
			console.log(json);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			{error && <h2>Data not fund</h2>}
			{loading && <h2>Data is loading...</h2>}
			<h1 key={data.id}>{data.name}</h1>
		</div>
	);
};
