import style from './ItemListContainer.module.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className={style.title}>
            <h1>{greeting}</h1>
        </div>
        
    )
}

export default ItemListContainer;