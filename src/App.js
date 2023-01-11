import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
   render() {
      let name = "Paul";
      return(
         
         <div>
            <Welcome name={name}/>
         </div>
      )
   }
}