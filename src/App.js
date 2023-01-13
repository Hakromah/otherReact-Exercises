import React from "react";
import { Counter } from "./Counter";


export class App extends React.Component{
   
   state = {
      count:0
   }
 
   constructor(props) {
      super(props)
      setInterval(() => {
         this.setState({
         count: this.state.count + 1
         })
      
      }, 1000);
   }

   render(){

      return(
         <div>
            <Counter propsCounter ={this.state.count}/>
         </div> 
      )
   }
}