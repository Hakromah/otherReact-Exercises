import React from "react";


export class Counter extends React.Component {
  state = {
    count: this.props.initialValue
  }

  stopInterv = null

  constructor(props){
    super(props)
    this.stopInterv = setInterval(() => {
      this.setState((state) => {
        return {count:state.count + (this.props.incrementBy)}
      })
    }, this.props.timeOut);
  }

  stopInterval =()=> {
    clearInterval(this.stopInterv)
  }
  
  render() {
    return(
    <div>
	 	<h3> count: {this.state.count} </h3>
	 	 {this.state.count < 5 && <h2>This count it great</h2>}
     <button onClick={this.stopInterval}>StopINT</button>
      
	 </div>
	
    )
  }
  
}


Counter.defaultProps = {
  initialValue: 1,
  timeOut: 1000,
  incrementBy: 2
}