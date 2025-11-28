import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const ref = doc(db, "items", id);

    getDoc(ref).then(snapshot => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  if (!item) return <p>Cargando detalle...</p>;

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;