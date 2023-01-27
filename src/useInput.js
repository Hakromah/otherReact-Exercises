import { useState } from 'react';

export default function useInput(initialValue) {
	const [value, setValue] = useState(initialValue);

   const handleChange =(evt) => {
      evt.preventDefault()

      setValue(evt.target.value)
   }
   return {
      value: value,
      onChange: handleChange,
   }
  
}
