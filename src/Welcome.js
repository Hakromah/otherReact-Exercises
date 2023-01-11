import React from "react";

export class Welcome extends React.Component{


   render(){

      return(
         <div>
            <strong>Welcome, {this.props.name}</strong>
         </div>
      )
   }
}