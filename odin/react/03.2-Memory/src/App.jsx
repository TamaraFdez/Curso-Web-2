// import { useState } from 'react'
import { Dragons } from './Mocks/dragons.json'
import './App.css'

function App() {
  const dragon ={
    name: Dragons.Caraxes,id,
    img: Dragons.Caraxes.image}
 
  

  return (
    <>
     <div>Nombre <img key={dragon.name} src={dragon.img} alt="caraxes" />
     </div>
    </>
  )
}

export default App
