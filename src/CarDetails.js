import React, { useEffect, useRef } from 'react'

export default function CarDetails() {
   const model = useRef()
   const year = useRef()
   const color = useRef()

   function handleSubmit(evt) {
      evt.preventDefault()

      console.log(model.current.value);
      console.log(year.current.value);
      console.log(color.current.value);
   }

   useEffect(() => {
      handleSubmit()
   }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <button>Submit </button>
         <input type="text"  ref={model} />
         <input type="date"  ref={year} />
         <input type="color"  ref={color}/>
      </form>
    </div>
  )
}
