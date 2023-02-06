// import React, { useEffect, useState } from 'react';

// export function DataFetching() {
// 	const [data, setData] = useState([])
// 	const [error, setError] = useState(false)
// 	const [loading, setLoading] = useState(false)

// 	const fetData = () => {
// 		fetch('https://api.github.com/users')
//          .then((res) => res.json())
//          .then((data) => {
//             setData(data)
//             console.log(data)
//          })

//          if (error) {
//             setError(new Error('data not fund'))
//          }
//          if(!error && !data) {
//             setLoading(true)
//          }
// 	};

   
//    useEffect(() => {
//       fetData()
//    },[])



// 	return (
// 		<div>
// 			<h1>Data Fetching</h1>
//          {loading && <h1>Data is loading...</h1>}
//          {data && data.map((item, i)  => <li key={i}>{item.login}</li>)}
// 		</div>
// 	);
// }
