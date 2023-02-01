import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((r) => r.json());

export function useGithubUser(){

	const { data, error, mutate } = useSWR('https://api.github.com/users', fetcher);

   function refrech() {
      mutate()
   }

   return {
      data:data,
      onRefrech: refrech,
      onError: error,
      isLoading: !data && !error
   }
}
 
function GithubUser() {
	const {data, onRefrech, onError, isLoading} =useGithubUser()

	console.log(data);
	return (
		<div>
			GithubUser
         {onError && <h3>Data not found</h3>}
         {isLoading && <h3>Data is loading...</h3>}
			{data && data.map((user) => <li key={user.id}>{user.login}</li>)}
         <button onClick={onRefrech}>Refrech</button>
		</div>
	);
};

export default GithubUser;









// const useGithubUser = () => {
// 	const [users, setData] = useState([]);
// 	const [error, setError] = useState(false);
// 	const [loading, setLoading] = useState(false);

// 	async function fetchData() {
// 		try {
// 			const getData = await fetch(`https://api.github.com/users/Hakromah`);
// 			const json = await getData.json();
// 			setData(json);
// 			console.log(json);

// 		} catch (error) {
// 			setError(error);

// 		} finally {
// 			setLoading(false);
// 		}
// 	}

// 	useEffect(() => {
// 		fetchData();
// 	}, []);

// 	return {
// 		users,
// 		error,
// 		loading,
// 	};
// }

// export default function GithubUser() {
// 	const { users, error, loading } = useGithubUser();

// 	return (
// 		<div>
// 			<h2>Github User Data </h2>
// 			{error && <h2>Data not fund</h2>}
// 			{loading && <h2>Data is loading...</h2>}
// 			<h1 key={users.id}>{users.name}</h1>
// 		</div>
// 	);
// }
