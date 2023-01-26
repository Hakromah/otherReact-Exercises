import React, { useState } from 'react'

export const ClickCounter = () => {
   const [count, setCount] = useState(0)

   const addNumber =()=> {
      setCount((value) => value + 1)
   }
   const decreaseNumber =()=> {
      setCount((value) => value - 1)
   }


  return (
    <div>ClickCounter
    <h1>{count}</h1>
    <button onClick={addNumber}>Increase</button>
    <button onClick={decreaseNumber}>Decrease</button>
    </div>
  )
}
