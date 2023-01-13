import React from "react";


export class Counter extends React.Component{

   
   render(){
      return(
         <div>
           <h1>{this.props.propsCounter}</h1>
         </div>
      )
   }
}