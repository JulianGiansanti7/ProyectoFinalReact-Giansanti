import { useState , useContext } from "react";
import styles from './ItemCount.module.css';
import { CartContext } from "../context/CartContext";

function ItemCount ({ item }) {
    const [counter, setCounter] = useState(1)
    const { addToCart } = useContext(CartContext)

    const handleAdd = () => {
        if( counter< item.stock ){
            setCounter(counter + 1)
        }
    }

    const handleRest = () => {
        if (counter === 0 ) return
        setCounter(counter -1)
    }

    const handleAddToCart = () => {
        addToCart({...item, count: counter})
    }

    return (
        <div className={styles.ItemContContainer}>
            <div className={styles.countContainer}>
                <button onClick={handleRest} className={styles.ResAndSumButton}>-</button>
                <p className={styles.counter}>{counter}</p>
                <button onClick={handleAdd} className={styles.ResAndSumButton}>+</button>
            </div>
            <button 
                onClick={handleAddToCart} 
                className={styles.AddButton}
                disabled= {counter === 0}
                >
                Añadir al Carrito
            </button>
        </div>
    )
}

export default ItemCount