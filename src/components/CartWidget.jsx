import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import style from './CartWidget.module.css';
import { NavLink } from 'react-router-dom';


const CartWidget = () => {
    return (
        <div>
            <NavLink to="/cart" className={style.link}>
                <FontAwesomeIcon className={style.cart} icon={faCartShopping} /> <span className={style.cant}>0</span>
            </NavLink>
            
        </div>
    )
}

export default CartWidget;