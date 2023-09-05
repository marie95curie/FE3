import axios from "axios"
import { useEffect, useState } from "react"

const Lista = () => {
  
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    
    const [lista, setLista] = useState([])

    // defino la funcion para obtener los pokemones
    //para usar axios tengo que instalarlo "npm install axios"
    const axiosPokemon = () => {
        axios(url)
        .then((res) => {
            setLista(res.data.results)
        })
    }
    
    // uso el hook con los corchetes como dependencia para no tener el problema del bucle
    useEffect(axiosPokemon, [])
    
    //itero la lista con un map y creo un componente hijo para cada uno de los elementos de la lista
    return (
        <>
            {lista.map((pokemon, index) => {
                return <p key={index}>{pokemon.name}</p>
            })}
        </>
    )
}

export default Lista