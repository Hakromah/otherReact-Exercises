import React, { Component } from 'react'


export class Login extends Component {

   state = {
      username: '',
      password: '',
      remember: false,
      disabled: true
   }

   handleOnChange =(evt) => {
      const {name, value, type, checked} = evt.target
      this.setState({
         [name] : type === 'checkbox' ? checked: value
      })


      if(this.state.username === '' || this.state.password ==='') {
         this.setState({
            disabled: true 
         })
      }else{
         this.setState({
            disabled: false
         })
      }
   }

   //!OnLogin function
   onLogin=() => {
      console.log(
         this.state.username,
         this.state.password,
         this.state.remember
      );
   }
//! RESET CONTENTE
   handleReset =() => {
      this.setState({
         username: '',
         password: '',
         remember: false,
         disabled: true
      })
   }

  render() {
    return (
      <div>
         <label htmlFor="username">Username: </label>
         <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/><br />

         <label htmlFor="password">Password: </label>
         <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/><br />

         <label htmlFor="checkbox">Remember: </label>
         <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleOnChange}/><br />
         <button onClick={this.onLogin} disabled={this.state.disabled}>Login</button>
         <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default Login