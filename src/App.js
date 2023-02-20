import { useState } from 'react';
import GithubUser from './GithubUsers';

export default function App() {
	const [usernameList, setUsernameList] = useState([]);
	const [inputText, setInput] = useState('');

	const handleOnchange = (e) => {
		setInput(e.target.value);
	};

	const handleClick = () => {
		setUsernameList([...usernameList, inputText]);

		setInput("")
	};

	return (
		<div>
			<input onChange={handleOnchange} type="text" value={inputText} />
			<button onClick={handleClick}>Add</button>
			{usernameList.map((username, index) => (
				<GithubUser key={index} username={username} />
			))}
		</div>
	);
}
