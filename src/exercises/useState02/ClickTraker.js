import React, { useState } from 'react';

export const ClickTraker = () => {
	const [track, setTrack] = useState({ type: '' });

	function handleTracker(evt) {
		setTrack({
			type: evt
		});
	}

	return (
		<div>
			
			<button onClick={() => handleTracker('btn1')}>button-1</button>
			<button onClick={() => handleTracker('btn2')}>button-2</button>
			<button onClick={() => handleTracker('btn3')}>button-3</button>


         {track.type === 'btn1' && <h1>You clicked {track.type}</h1>}
         {track.type === 'btn2' && <h1>You clicked {track.type}</h1>}
         {track.type === 'btn3' && <h1>You clicked {track.type} </h1>}
		</div>
	);
};
