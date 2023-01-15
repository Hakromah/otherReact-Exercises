import React, { Component } from 'react'
import Welcome from './Welcome'

export class InteractiveWelcome extends Component {
   state = {
      fname: ''
   }

   hadleInt =(evt) => {
      
      this.setState({
         fname: evt.target.value
      })
   }
   
  render() {

    return (
      <div>
         <label htmlFor="fname">Name:</label>
         <input onChange={this.hadleInt} type="text" name="fname" value={this.state.fname}/>
         <Welcome name={this.state.fname} />
      </div>
    )
  }
}

