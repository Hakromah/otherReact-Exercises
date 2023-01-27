import useGithubUser from "./useGithubUser";

export default function GithubUser() {
	const { data, error, loading } = useGithubUser();

	return (
		<div>
			<h2>Custom Hooks - 04 </h2>
			{error && <h2>Data not fund</h2>}
			{loading && <h2>Data is loading...</h2>}
			<h1 key={data.id}>{data.name}</h1>
		</div>
	);
}
