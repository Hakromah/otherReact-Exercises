import useGithubUser from "./useGithubUser";

function GithubUser({username}) {
	const { data, onRefrech, onError, isLoading} = useGithubUser(username);
	return (
		<div>
      <h1>{username}</h1>
			{onError && <h3>Data not found</h3>}
			{isLoading && <h3>Data is loading...</h3>}
			{data && data.map((el) => <li key={el.id}>{el.login}</li>)}
			<button onClick={onRefrech}>Refrech</button>
		</div>
	);
}

export default GithubUser;



// import useGithubUser from "./useGithubUser";

// function GitHubUser({ username }) {
//   const { data, error } = useGithubUser(username);

//   return (
//     <div>
//       {!data && !error && <h1>Loading...</h1>}
//       {error && <h1>Something went wrong</h1>}
// 		{data && data.map((item) => (<li key={item.id}>{item.name}</li>))}
//     </div>
//   );
// }

// export default GitHubUser;


