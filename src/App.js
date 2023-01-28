import React, { useMemo, useState } from 'react';
import FilterList from './FilterList';

export default function App() {
	const [list, setList] = useState([
		{ id: 1, name: 'Matthew', age: 28 },
		{ id: 2, name: 'Paul', age: 16 },
		{ id: 3, name: 'Aly', age: 25 },
		{ id: 4, name: 'John', age: 18 },
	]);

	const result = useMemo(
		() => list.filter((person) => person.age > 18),
		[list]
	);

	return (
		<div>
			<FilterList filtered={result} />
		</div>
	);
}
