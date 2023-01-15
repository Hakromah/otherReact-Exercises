import React, { Component } from 'react'


export class Login extends Component {

   state = {
      username: '',
      password: '',
      remember: false
   }

   handleOnChange =(evt) => {
      const {name, value, type, checked} = evt.target
      this.setState({
         [name] : type === 'checkbox' ? checked: value
      })

      console.log(
         evt.target
      );
   }



  render() {
    return (
      <div>
         <label htmlFor="username">Username: </label>
         <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/><br />

         <label htmlFor="password">Password: </label>
         <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/><br />

         <label htmlFor="checkbox">Remember: </label>
         <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleOnChange}/>
      </div>
    )
  }
}

export default Login