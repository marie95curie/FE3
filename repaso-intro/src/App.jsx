import './App.css'
import ComponenteDeClase, { OtroDeClase } from './Components/ComponenteDeClase'
import ComponenteFuncional, { OtroFuncional } from './Components/ComponenteFuncional'

function App() {

  return (
      <div className='App'>
        <ComponenteDeClase/>
        <OtroDeClase/>
        <ComponenteFuncional/>
        <OtroFuncional/>
      </div>
  )
}

export default App
