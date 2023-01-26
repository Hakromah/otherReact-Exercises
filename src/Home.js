import React from "react";
import { Counter } from "./Counter";
import { UseState } from "./UseState";

export class Home extends React.Component {
   state = {
      date: new Date(),
      count: 0
   }

   constructor(props) {
      super(props)

      setInterval(() => {
         this.setState(() => ({
            date: new Date()
         }))

         this.setState({
            
         })

      }, 1000);
   }

   render() {
      return(
         <div>
            <h1>Burası Türkçe Alanidir</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
            <Counter/>
            <UseState/>
            
         </div>
      )
   }
}