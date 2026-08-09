import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartElements, setCartElements] = useState([]);


    const addToCart = (product) => {
        setCartElements((prevCart) => {
            const existingProduct = prevCart.find((item) => item.title === product.title);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.title === product.title
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (product) => {
        setCartElements((prevCart) => prevCart.filter((item) => item.title !== product.title));
    };

    return (
        <CartContext.Provider value={{ cartElements, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
