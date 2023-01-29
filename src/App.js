import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Counter } from './Counter'
import ShowGithubUser from './ShowGithubUser'
import Welcome from './Welcome'

function App() {
  return (
    <div>
      <Routes>
         <Route path ='/' element={<Welcome name='Hassan'/>}/>
         <Route path ='/counter' element={<Counter/>}/>
         <Route path ='/:username' element={<ShowGithubUser />}/>
      </Routes>
    </div>
  )
}

export default App