import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import styles from "./Checkout.module.css";

function Checkout() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    emailConfirm: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const total = getTotalPrice();

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (buyer.email !== buyer.emailConfirm) {
      alert("Los correos no coinciden");
      return;
    }

    setLoading(true);

    try {
      // 1. Crear la orden
      const order = {
        buyer: {
          name: buyer.name,
          phone: buyer.phone,
          email: buyer.email,
        },
        items: cart,
        total,
        date: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "orders"), order);

      // 2. Actualizar stock uno por uno
      for (const product of cart) {
        const ref = doc(db, "items", product.id);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const currentStock = snap.data().stock;

          await updateDoc(ref, {
            stock: currentStock - product.count,
          });
        }
      }

      setOrderId(docRef.id);
      clearCart();

    } catch (error) {
      console.log("Error en checkout: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className={styles.Success}>
        <h2>¡Compra realizada con éxito! 🎉</h2>
        <p>Tu código de orden es:</p>
        <h3>{orderId}</h3>

        <a className={styles.GoHome} href="/">Volver al inicio</a>
      </div>
    );
  }

  return (
    <div className={styles.CheckoutContainer}>
      <h2>Finalizar Compra</h2>

      <form onSubmit={handleSubmit} className={styles.Form}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="emailConfirm"
          placeholder="Confirmar Email"
          value={buyer.emailConfirm}
          onChange={handleChange}
          required
        />

        <button disabled={loading} className={styles.Button}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Checkout;