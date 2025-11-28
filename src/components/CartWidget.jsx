import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import style from './CartWidget.module.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'


const CartWidget = () => {

    const { getTotalProducts } = useContext(CartContext)
    const total = getTotalProducts()

    return (
        <div>
            <NavLink to="/cart" className={style.link}>
                <FontAwesomeIcon className={style.cart} icon={faCartShopping} /> <span className={style.cant}>{total}</span>
            </NavLink>
            
        </div>
    )
}

export default CartWidget;