import React from "react";

//! Comments:
//? If no name prop is passed to Welcome component, the code can still run corectly.
//! We can also set a default value to the name props it also works as shown below.

export class Welcome extends React.Component {

   state={
      name :"Matthew"
   }
   render() {
       
      return(
         <div>
            <p>Welcome, {this.state.name}</p>
         </div>
      )
   }
}




