import React, { useState } from 'react'

export const Zsample = () => {
   const [count, setCount] = useState(0)
   setInterval(() => {
      setCount(count + 1)
   }, 1000);



  return (
    <div>
    <h1>{count}</h1>
    </div>
  )
}
