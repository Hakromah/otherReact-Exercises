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
