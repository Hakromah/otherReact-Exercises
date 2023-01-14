import React from "react";


export class ClickCounter extends React.Component{
   state = {
      count: 0,
   }

   addNum=()=> { 
      this.setState({
      count: this.state.count +1

      }) 
   }

   render(){
      let countP ="Count Number:";
      return(
         <div>
            <h2>{countP}{this.state.count}</h2>
           <button onClick={this.addNum}>Increase</button>
         </div>
      )
   }
}