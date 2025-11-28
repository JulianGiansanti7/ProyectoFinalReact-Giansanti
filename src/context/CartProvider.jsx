import { useState, useEffect } from 'react'
import { CartContext } from './CartContext'

function CartProvider ({children}) {

    const [ cart, setCart ] = useState(() => {
        const saved = localStorage.getItem("cart")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const getTotalProducts = () => cart.reduce((acc, current) => acc + current.count, 0)

    const getTotalPrice = () => cart.reduce((acc, prod) => acc + prod.precio * prod.count, 0)

    const RemoveFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const addToCart = prod => {
        const isInCart = cart.some(item => item.id === prod.id);

        if (isInCart) {
            setCart(
                cart.map(item =>
                    item.id === prod.id
                        ? { ...item, count: item.count + prod.count }
                        : item
                )
            );
        } else {
            setCart([...cart, prod]);
        }
    };
        
    

    return (
        <CartContext.Provider value={{ getTotalProducts , addToCart, getTotalPrice, RemoveFromCart, clearCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;