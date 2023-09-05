import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    
    const params = useParams()

    const [beer, setBeer] = useState([])

    const getBeer = () => {
        axios(`https://api.punkapi.com/v2/beers/` + params.id)
        .then((res) => {
            setBeer(res.data[0])
        })
    }
    useEffect(getBeer, [])
  
  
  return (
    <div>
        <h2>Cerveza numero {params.id}</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <Link to={'/'}>Go back</Link>
        
    </div>

  )
}

export default Beer