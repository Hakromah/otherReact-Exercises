import React from "react";


export class Counter extends React.Component{

   state = {
      count:0
   }
 //! No we don't need a constructor after using componentDidMount, because
 //!  The componentDidMount() method is called after the component is rendered.
   componentDidMount() {

      setInterval(() => {
         this.setState({
         count: this.state.count + 1
         })
      
      }, 1000);
   }
 
   render(){
      return(
         <div>
         <h1>{this.state.count}</h1>
         </div>
      )
   }
}