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


   addItems =()=> {
      
      // set variable to get the unique value
      const obj = {
         name: this.state.texts,
         id: Date.now()
      }

      this.setState({
         items: [...this.state.items, obj], texts:"",
      })
   }

// Reset data
   handleReset =()=> {
      this.setState({
         items: [],
      })
   }

 // to remove the selected 'li'
   removeLi = (id)=> {
      const newList = this.state.items.filter((todo)=> todo.id !==id)

      this.setState({
        items: newList
      })
   }

   render() {
      return(
         <div>
            <input type="text" onChange={this.handleChange} name = 'texts' value={this.state.texts}/>

            <button onClick={this.addItems}>Add Text</button>
            <button onClick={this.handleReset}>Reset</button>

            {this.props.render(this.state.items,this.removeLi)}
         </div>
      )
   }
}