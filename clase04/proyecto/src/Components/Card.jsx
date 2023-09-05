import styles from '../Pages/Home.module.css' //Acá está el modulo de estilos

const Card = ({pizza}) => {
  return (
    <div className={styles.card}>
        <img src={pizza.img} alt={pizza.tipo} />
        <h3>{pizza.tipo}</h3>
        <p>{pizza.precio}</p>
    </div>
  )
}

export default Card