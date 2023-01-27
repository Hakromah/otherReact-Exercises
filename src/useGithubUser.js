import { useEffect, useState } from 'react';

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
export default useGithubUser;