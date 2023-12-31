import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./Home"
import Contacto from "./Contacto"
import Beer from "./Beer"

function App() {
  return (
   <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contacto/>}/>
        <Route path='/beer/:id' element={<Beer/>}/>
      </Routes>
   </div>
  )
}

export default App
