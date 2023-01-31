import React from "react";
import { Counter } from "./Counter";




export class App extends React.Component{
   
   
   render(){

      return(
         <div>
            <Counter  initialCount ={0} incrementInterval={1000} incrementAmount={1}/>
         </div> 
      )
   }
}

