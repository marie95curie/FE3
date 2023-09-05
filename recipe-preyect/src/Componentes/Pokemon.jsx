import axios from "axios"
import { useEffect, useState } from "react"

const Pokemon = () => {
  
  //seteo la url del endpoint
  const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'
  
  //uso estados para guardarme la información que me traigo de la api
  const [pokemon, setPokemon] = useState({})

  //invoco la función pero con el useEffect, para que lo haga una sola vez
  useEffect(() => {
    
    const getPoke = async () => {
      try {
        let result = await axios(url)
        console.log(result.data)
        setPokemon(result.data)
      } catch(e) {
        alert(e)
      }
    }
    getPoke()

  } , [])

  return (
    <div style={{backgroundColor:'lightgrey', padding:'5px'}}>
      <h3>Pokemon ganador:</h3>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt="" />
    </div>
  )
}

export default Pokemon