import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Counter } from './Counter'
import Welcome from './Welcome'

function App() {
  return (
    <div>
      <Routes>
         <Route path ='/' element={<Welcome name='Hassan'/>}/>
         <Route path ='/counter' element={<Counter/>}/>y
      </Routes>
    </div>
  )
}

export default App