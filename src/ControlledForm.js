import React  from 'react'
import useInput from './useInput'

export default function ControlledForm() {
  
 const  username =useInput("");
 const  password =useInput("");

  
  function submit(e){
    e.preventDefault();
    console.log('Username:', username.value);
    console.log('Password:', password.value);
  }

  return (
    <div>
      <form onSubmit={submit}>
      <input type="text" placeholder='username' {...username}/><br/>
      <input type="password" placeholder='password' {...password}/>
      <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}
