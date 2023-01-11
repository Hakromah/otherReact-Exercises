import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{


   render(){
      return(
         <div>
            <Age your_age={this.props.age}/>
         </div>
      )
   }
}