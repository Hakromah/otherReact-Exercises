import React, { useEffect, useState } from 'react';

const useGithubUser = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	async function fetchData() {
		try {
			const getData = await fetch(`https://api.github.com/users/Hakromah`);
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

	return {
		data,
		error,
		loading,
	};
}

export default function GithubUser() {
	const { data, error, loading } = useGithubUser();

	return (
		<div>
			<h2>Github User Data </h2>
			{error && <h2>Data not fund</h2>}
			{loading && <h2>Data is loading...</h2>}
			<h1 key={data.id}>{data.name}</h1>
		</div>
	);
}
