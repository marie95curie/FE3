const NavBar = () => {
  
    const titulos = ['Home', 'Shop', 'Contact', 'About']
    
    return (
    
    <div>
        {titulos.map((value, index)=>{
            return <h4 key={index}> {value} </h4>
        })}
    </div>  
  
  )
}

export default NavBar