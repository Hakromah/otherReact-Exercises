import React from 'react'
import CarDetails from './CarDetails'

export default function App() {
  return (
    <div>
      <CarDetails initialModel= 'Nissan' initialYear ="2022-01-01" initialColor='#4fa23f'/>
    </div>
  )
}
