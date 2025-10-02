import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import style from './CartWidget.module.css';


const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon className={style.cart} icon={faCartShopping} /> <span className={style.cant}>0</span>
        </div>
    )
}

export default CartWidget;