import React, { useState } from 'react'

export const UseState = () => {

  const [count, setCount] = useState(0)

  const addNum = () => {
   setCount(count+1)
  }
  
  function decrease() {
   setCount(count-1)
  }

  return (
    <div>UseState
      <p>Count: {count}</p>
      <button onClick={addNum}>Add</button>
      <button onClick={decrease}>Minus</button>
    </div>
  )
  
}
