import './App.css'
import Productos from './Componentes/Productos'
import Cart from './Componentes/Cart'
import { useState } from 'react'
import Mesa05 from './Componentes/Mesa05'

function App() {
  console.log("renderizoApp")

  const [cart, setCart] = useState([])
  
  const add = (item) => { 
    setCart([...cart, item])
  }
  
  return (
    <>
      <Mesa05/>
      <Cart cart={cart}/>
      <Productos add={add} />
    </>
  )
}

export default App
