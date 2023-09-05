import { useState } from 'react'

const Mesa05 = () => {
    
    const [lista, setlista] = useState([])
    const sumarItem = (item) => {
        setlista([...lista, item])
    } 

    return (
    <>
        <button onClick={() => { sumarItem('🥎') }}>🥎</button>
        <button onClick={() => { sumarItem('🏀') }}>🏀</button>
        <button onClick={() => { sumarItem('🏈') }}>🏈</button>

        {lista.map((item, index) => <li key={index}> Se ha añadido {item} a la lista</li>)}
    </>
  )
}

export default Mesa05