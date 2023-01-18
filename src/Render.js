import React from 'react'
import { Container } from './Conatiner'

import Header from './Header'
import Home from './Home'

function Render() {
  return (

      <Container title ="Welcome you all">
         <Home/>
         <Header/>
      </Container>
   
  )
}

export default Render
