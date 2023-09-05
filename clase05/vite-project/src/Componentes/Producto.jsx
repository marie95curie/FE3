import styles from './Producto.module.css'

const Producto = ({producto, add}) => {
  return (
    <div className={styles.card}>
      <h3>Epic</h3>
      <p>Título: {producto.titulo}</p>
      <p>Color: {producto.color}</p>
      <button onClick={() => add(producto)}>➕Agregar</button> 
    </div>
  )
}

export default Producto

//Cuando va la función que va dentro del "onClick=()" tiene parámetros debo usar un callback