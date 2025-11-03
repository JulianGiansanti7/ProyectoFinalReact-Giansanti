
import styles from './ItemDetail.module.css';

function ItemDetail({ item }) {
  return (
    <div className={styles.ItemContainer}>
      <img src={item.img} alt={item.nombre} className={styles.img}/>
      <div className={styles.Detail}>
        <h2>{item.nombre}</h2>
        <p>Precio: ${item.precio}</p>
        <button className={styles.DetailButton} >Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemDetail;