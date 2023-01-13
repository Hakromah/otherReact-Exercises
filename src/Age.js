import React from "react";

export class Age extends React.Component{


   render(){

      return(
         <div><p>{this.props.your_age > 18 ? "Your age is": "You are very young!"}</p></div>
      )
   }
}