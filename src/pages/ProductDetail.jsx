import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { itemsData } from "../data/products";

const ProductDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = new Promise((resolve) => {
            const found = itemsData.find((prod) => prod.id === parseInt(id));
            setTimeout(() => resolve(found), 1000);
        });

        fetchItem.then((res) => setItem(res));
    }, [id]);

    if (!item) return <p>Cargando detalle...</p>;

    return <ItemDetail item={item} />;
};

export default ProductDetail;