import { useEffect, useState } from 'react';

const useGithubUser = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	async function fetchData() {
		setLoading(true);
		try {
			const getData = await fetch(`https://api.github.com/users/$username}`);
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
		fetchData(username);
	}, []);

	return {
		data,
		error,
		loading,
	};
};
export default useGithubUser;
