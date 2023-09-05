import { useEffect, useState } from 'react'
import Card from "./components/Card"
import { Link } from 'react-router-dom'

const Home = () => {
  
  const [beers, setBeers] = useState([])

  const getBeers = async() =>{
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    setBeers(data)
  }

  // hay que usar los corchetes con useEffect para que lo haga una sola vez
  useEffect(() => {
    getBeers()
  }, [])

  return (
    <div className='grid'>
        {beers.length
          ? beers.map((beer) => {
            return <Link to={'/beer/'+beer.id} key={beer.id} ><Card data={beer}/></Link>
          })
          : null
        }
    </div>
  )
}

export default Home