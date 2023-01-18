import React from "react";

export class Container extends React.Component{


   render(){
      const stylingCnt = {
         background: '#fff',
         border: '1px solid red',
         fontWeight: 'bold'
      }

      return(
      <div style={stylingCnt}>

         <div>{this.props.title}</div>
         <div>{this.props.children}</div> 
      </div>
      )
   }
}