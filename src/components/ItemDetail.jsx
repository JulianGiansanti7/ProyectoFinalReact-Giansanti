import styles from './ItemDetail.module.css';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  return (
    <div className={styles.ItemContainer}>
      <img src={item.img} alt={item.nombre} className={styles.img}/>
      <div className={styles.Detail}>
        <h2>{item.nombre}</h2>
        <p>Precio: ${item.precio}</p>
        <p>Stock: {item.stock}</p>
        <div>
          <ItemCount item={item} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;