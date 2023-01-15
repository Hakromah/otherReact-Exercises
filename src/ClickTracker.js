import React, { Component } from 'react'

export class ClickTracker extends Component {
   
  state = {
    type: ''
  }

  handleTracker =(evt) => {
    this.setState ({
      type: evt
    })
  }


  render() {
    return (
      <div>
        <button onClick={() => this.handleTracker('button1')}>Button 1</button>
        <button onClick={() => this.handleTracker('button2')}>Button 2</button>
        <button onClick={() => this.handleTracker('button3')}>Button 3</button>


        {this.state.type === "button1" ? <h1>First</h1>: ''}
        {this.state.type === "button2" && <h1>Second</h1>}
        {this.state.type === "button3" && <h1>Third</h1>}

      </div>
    )
  }
}
