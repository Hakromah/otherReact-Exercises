import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{


   render(){
      return(
         <div>
            {this.props.age? <Age your_age={this.props.age}/>: ' '}
         </div>
      )
   }
}