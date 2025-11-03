import Item from "./Item"
import styles from './ItemList.module.css';


const ItemList = ({items}) => {
    return (
        <div className={styles.itemList}>
            {items.map(item => (
                <div key={item.id}>
                    <Item item = {item} />
                </div>
            ))}
        </div>
    )
}

export default ItemList