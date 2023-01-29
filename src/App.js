import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Welcome from './Welcome'

function App() {
  return (
    <div>
      <Routes>
         <Route path ='/' element={<Welcome name='Hassan'/>}/>
      </Routes>
    </div>
  )
}

export default App