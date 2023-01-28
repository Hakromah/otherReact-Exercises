import React from 'react';

export default function FilterList({ filtered }) {
	return (
		<div>
			{filtered.map((person) => (
				<h2 key={person.id}>
					{person.name} is {person.age} years old
				</h2>
			))}
		</div>
	);
}
