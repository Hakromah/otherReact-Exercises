import React from "react";
import { CounterDisplay } from "./CounterDisplay";


export class Counter extends React.Component{
 
   render(){
      return(
         <div>
           <CounterDisplay cdisplay = {this.props.propsCounter}/>
         </div>
      )
   }
}