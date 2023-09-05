import './App.css'
import Bienvenida from './Components/Bienvenida'

const elias = {
  nombre: 'Elias',
  apellido: 'Gazza',
  edad: 33
}

function App() {

  return (
    <Bienvenida usuario={elias}/>
  )
}

export default App
