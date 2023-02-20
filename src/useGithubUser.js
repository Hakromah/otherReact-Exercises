import useSWR from 'swr';


const fetcher = (url) => fetch(url).then(res => res.json());

function useGithubUser({username}) {
   const url = `https://api.github.com/users`;

   const { data, error, mutate } = useSWR(() => username !== null? url : null, fetcher);

	function refrech() {
		mutate();
	}
	refrech()

	return {
		data: data,
		onRefrech: refrech,
		onError: error,
		isLoading: !data && !error,
	};
}

export default useGithubUser;









// import useSWR from 'swr';

// export default function useGithubUser({username}) {
// 	const fetchData = (url) => fetch(url).then((response) => response.json());

// 	const shouldFetch = username !== null ? true : false;

// 	const { data, error } = useSWR(
// 		shouldFetch ? `https://api.github.com/users/${username}` : null,
// 		fetchData
// 	);

// 	return {
// 		data: data,
// 		error: error,
// 	};
// }
