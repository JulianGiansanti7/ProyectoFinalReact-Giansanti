import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = ({ item }) => {
    return (
        <div className={styles.itemCard}>
            <Link to={`/products/${item.id}`} className={styles.link}>

                <img src={item.img} alt={item.nombre} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.nombre}</h3>
                    <p className={styles.itemPrice}>Precio: ${item.precio}</p>
                    <button className={styles.itemButton}>Comprar ahora</button>
                </div>
            
            </Link>
            
        </div>
    );
};

export default Item;