import useGithubUser from "./useGithubUser";

function GithubUser({username}) {
	const { data, onRefrech, onError, isLoading} = useGithubUser(username);

	console.log(`Login from githubUser`,data);
	return (
		<div>
      <h1>username{username}</h1>
			{onError && <h3>Data not found</h3>}
			{isLoading && <h3>Data is loading...</h3>}

			{data && data.map((user) => <li key={user.id}>{user.login}</li>)}
			<button onClick={onRefrech}>Refrech</button>
		</div>
	);
}

export default GithubUser;
