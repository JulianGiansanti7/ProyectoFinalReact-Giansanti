import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config.js'
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsCollection = collection(db, "items");

    getDocs(productsCollection)
      .then((snapshot) => {
        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(productos);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return <ItemList items={items} />;
}

export default ItemListContainer;