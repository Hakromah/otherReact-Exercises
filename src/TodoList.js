import React from 'react';

export class TodoList extends React.Component {

   state = {
      items: [],
      texts: ''
   }

   handleChange =(evt)=> {
      this.setState({
         texts: evt.target.value
      })

      
   }


   handleInput =()=> {
      this.setState({
         items: [...this.state.items, this.state.texts] 
      })

     this.setState({
      texts: '',
     })
   }

   render() {
      return(
         <div>
            <input type="text" onChange={this.handleChange} name = 'texts' value={this.state.texts}/>
            <button onClick={this.handleInput}>Add Text</button>
            <ul>{this.state.items.map(item=> <li key={item.id}>{item}</li>)}</ul> 
         </div>
      )
   }
}