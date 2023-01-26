import React, { useEffect, useState } from 'react';

export default function Counterr() {
	const [count, setCount] = useState(0);

   useEffect(() => {
      const stopInt = setInterval(() => {

         setCount((c) => c + 1)
      }, 1000);

      return ()=> {
         clearInterval(stopInt)
      }
   }, [])

	return (
		<div>
			<h1>{count}</h1>
		</div>
	);
}
