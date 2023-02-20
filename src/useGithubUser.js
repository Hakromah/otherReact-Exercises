import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function useGithubUser(username) {

	const { data, error, mutate } = useSWR(() => username !== null ?
	 'https://api.github.com/users/' + username : null, fetcher );

	function refrech() {
		mutate();
	}
	refrech();

	return {
		data: data,
		onRefrech: refrech,
		onError: error,
		isLoading: !data && !error,
	};
}
export default useGithubUser;
