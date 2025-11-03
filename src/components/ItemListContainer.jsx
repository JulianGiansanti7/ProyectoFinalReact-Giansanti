import { useEffect, useState } from 'react';
import style from './ItemListContainer.module.css';
import ItemList from './ItemList';
import { itemsData } from '../data/products';

const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(itemsData);
        }, 2000);
    });
    };

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems().then((items) => setItems(items))
    }, []);

    return (
        <div className={style.container}>
            <h1>{greeting}</h1>
            <h2>Lista de Productos</h2>
            {items.length === 0 ?
            (<p>Cargando...</p>) :
            (
                <ItemList items = {items} />
            )}
        </div>
        
    )
}

export default ItemListContainer;