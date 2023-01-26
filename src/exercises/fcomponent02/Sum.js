import React from 'react';


export default function Sum({ numbers }) {
	return (
		<div>
			Sum <h1>{numbers.reduce((prev, curr) => prev + curr)}</h1>
		</div>
	);
}

// export default function App() {
//    return (
//      <div>
//        <Sum numbers= {[5, 6, 3, 8]}/>
//      </div>
//    )
//  }
