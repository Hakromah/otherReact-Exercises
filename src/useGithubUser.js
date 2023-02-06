import { useEffect, useState } from 'react';

const useGithubUser = (user) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);


	async function fetchData() {
		setLoading(true);
		try {
			const getData = await fetch(`https://api.github.com/users/${user}`);
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
		if(user !== undefined) {
			fetchData(user);
		}
		
	}, [user]);

	return {
		data,
		error,
		loading,
	};
};
export default useGithubUser;
