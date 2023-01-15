import React, {createRef} from "react";

export class UncontrolledLogin  extends React.Component {

   state = {
      disabled: true
   }
   _formRef = createRef()

   handleChange =()=> {
      if(this._formRef.current.elements.username.value === '' || this._formRef.current.elements.password.value ==='') {
         this.setState({
            disabled: true
         })
      }else{
         this.setState({
            disabled: false
         })
      }
   }

   handleSubmit =(evt) => {
      evt.preventDefault()

      const userName = evt.target.elements.username.value
      const passWord = evt.target.elements.password.value
      const checkBox = evt.target.elements.remember.value

      console.log(
         userName,
         passWord,
         checkBox
      );
     
      
   }

  
//! RESET CONTENTE
   handleReset =() => {
     this._formRef.current.elements.username.value = ''
     this._formRef.current.elements.password.value = ''
     this._formRef.current.elements.remember.checked = false
   }

   render() {
    return (
      <div>
      <h1>Uncontroled Form</h1>
      <form onSubmit={this.handleSubmit} ref={this._formRef}>

         <label htmlFor="username">Username: </label>
         <input type="text" name="username" onChange={this.handleChange}/><br />

         <label htmlFor="password">Password:</label>
         <input type="password" name="password" onChange={this.handleChange}/><br />

         <label htmlFor="checkbox">Remember: </label>
         <input type="checkbox" name="remember"/><br />
         <button disabled ={this.state.disabled}>Login</button>
         <button onClick={this.handleReset}>Reset</button>
      </form>
      </div>
   )
  }
}