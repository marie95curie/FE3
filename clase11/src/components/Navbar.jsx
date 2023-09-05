import { Link } from 'react-router-dom'
import Home from '../Home'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default Navbar