import Producto from "./Producto"

const Productos = ({add}) => {
  
  let productos = [
    {id: 0, marca:'Epic', titulo:40, color:'01038', precio:1000, articulo: 'Epic/040/01038'},
    {id: 1, marca:'Epic', titulo:50, color:'01038', precio:800, articulo: 'Epic/050/01038'},
    {id: 2, marca:'Epic', titulo:80, color:'01038', precio:600, articulo: 'Epic/080/01038'},
    {id: 3, marca:'Epic', titulo:40, color:'C9760', precio:1000, articulo: 'Epic/040/C7960'},
    {id: 4, marca:'Epic', titulo:50, color:'C9760', precio:800, articulo: 'Epic/050/C7960'},
    {id: 5, marca:'Epic', titulo:80, color:'C9760', precio:600, articulo: 'Epic/080/C7960'},
  ]
  
  return (
    productos.map((producto) => {
        return <Producto key={producto.id} producto={producto} add={add}/>
    })
  )
}

export default Productos