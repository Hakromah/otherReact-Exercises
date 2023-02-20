import useGithubUser from "./useGithubUser";

function GithubUser({username}) {
	const { data, onRefrech, onError, isLoading} = useGithubUser(username);
	return (
		<div>
      <h1>{username}</h1>
			{onError && <h3>Data not found</h3>}
			{isLoading && <h3>Data is loading...</h3>}
			{data && <li key={data.id}>{data.name}</li>}
			<button onClick={onRefrech}>Refrech</button>
		</div>
	);
}

export default GithubUser;



