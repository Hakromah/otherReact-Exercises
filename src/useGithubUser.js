import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

function useGithubUser(username) {
   const url = `https://api.github.com/users/${username}`;

   const { data, error, mutate } = useSWR( () => username ? url : null, fetcher);

	function refrech() {
		mutate();
	}


	return {
		data: data,
		onRefrech: refrech,
		onError: error,
		isLoading: !data && !error,
	};
}

export default useGithubUser;
