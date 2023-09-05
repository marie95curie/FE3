import styles from './Cart.module.css'

const Cart = ({cart}) => {
  
  return (
    <div className={styles.cart}>
        <h3>Carrito</h3>
        {cart.map((item, index) => {
            return <li key={index}>{item.articulo}</li>
        })}
    </div>
  )
}

export default Cart