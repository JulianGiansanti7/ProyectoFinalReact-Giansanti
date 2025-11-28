import styles from './Cart.module.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'
import { NavLink } from "react-router-dom";

function Cart() {

  const { cart, getTotalPrice, RemoveFromCart, clearCart } = useContext(CartContext)

  const total = getTotalPrice()

  if (cart.length < 1) {
    return (
      <div className={styles.IsEmpty}>
        <h2>Aún no se agregó ningún producto</h2>
      </div>
    )
  }

  return (
    <div className={styles.CartContainer}>
      <div className={styles.CartProducts}>
        {cart.map(prod => (
          <div key={prod.id} className={styles.Product}>
            <img className={styles.ImgProd} src={prod.img} alt={prod.nombre} />
            <div className={styles.ProdInfo}>
              <p className={styles.NameProd}>{prod.nombre}</p>
              <p>x{prod.count}</p>
              <button onClick={() => RemoveFromCart(prod.id)} className={styles.DelButton}>Eliminar</button>
            </div>
            <div className={styles.ProdPrice}>
              <p>${prod.precio}</p>
              <p>Subtotal: ${prod.precio * prod.count}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.PriceContainer}>
        <p className={styles.TotalPrice}>Total: ${total}</p>
        <button onClick={clearCart} className={styles.Clear}>Vaciar Carrito</button>
      </div>
      <button className={styles.BuyButton}><NavLink to="/checkout" className={styles.ButtonLink} href="#">Finalizar Compra</NavLink></button>
    </div>
  )
}

export default Cart