import { useState } from 'react'

const Form = () => {
    const[usuario, setUsuario]=useState({nombre: '', edad:0 ,pokemon:''})
    const[registro, setRegistro] = useState(false)
    const[error, setError] = useState(false)
    const nombreHandler = (event) => {
        setUsuario({...usuario, nombre:event.target.value})
    }
    const edadHandler = (event) => {
        setUsuario({...usuario, edad:parseInt(event.target.value)})
    }
    const pokemonHandler = (event) => {
        setUsuario({...usuario, pokemon:event.target.value})
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        if(usuario.nombre.length > 3 && usuario.pokemon.length > 3 && usuario.edad < 120){
            console.log(typeof usuario.edad);
            setError(false)
            setRegistro(true)
        }else{
            setError(true)
            setRegistro(false)
            
        }
        
    }
  return (
    <>
    <form onSubmit={submitHandler}>
        <label htmlFor="name">Full name</label>
        <input type='text' id='name' onChange={nombreHandler}></input>
        <br/>
        <label htmlFor="age">Age</label>
        <input type='number' id='age' onChange={edadHandler}></input>
        <br/>
        <label htmlFor="pokemon">Pokemon favorito</label>
        <input type='text' id='pokemon' onChange={pokemonHandler}></input>
        <br/>
        <button>Registrar</button>
    </form>
    <br/>
    {error && <h5>Tenes mal uno de los campos</h5>}
    {registro?  <p>Bienvenido {usuario.nombre}, El registro fue exitoso</p>: null}
</>
  )
}

export default Form