import React from "react"
import {TodoList} from "./TodoList"
export class App extends React.Component {
   render() {
      return(
         <div>
           <TodoList render={(items,removeLi) => { 
            return(
               <div>
                {items.map(item=> <li key={item.id}>{item.name}
                <span onClick={() =>removeLi(item.id)}
                 style={{color: 'red', fontSize: '20px', cursor: 'pointer'}}> x</span></li> )}
            </div>
            )
           }}>

           </TodoList>
         </div>
      )
   }
}