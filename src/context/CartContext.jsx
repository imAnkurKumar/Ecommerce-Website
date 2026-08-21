import {
    createContext,
    useContext,
    useState,
} from "react";

import { AuthContext } from "./AuthContext";
import { CRUDCRUD_BASE_URL } from "../config";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { email } = useContext(AuthContext);

    const [cartElements, setCartElements] = useState([]);

    const addToCart = async (product) => {
        const existingProduct = cartElements.find(
            (item) => item.title === product.title
        );

        try {
            // Product already exists
            if (existingProduct) {
                const updatedProduct = {
                    ...existingProduct,
                    quantity: existingProduct.quantity + 1,
                };

                await fetch(
                    `${CRUDCRUD_BASE_URL}/cart${encodeURIComponent(
                        email
                    )}/${existingProduct._id}`,
                    {
                        method: "PUT",

                        headers: {
                            "Content-Type": "application/json",
                        },

                        body: JSON.stringify(updatedProduct),
                    }
                );

                setCartElements((prevCart) =>
                    prevCart.map((item) =>
                        item.title === product.title
                            ? updatedProduct
                            : item
                    )
                );

                return;
            }

            // New product
            const newProduct = {
                ...product,
                quantity: 1,
            };

            const response = await fetch(
                `${CRUDCRUD_BASE_URL}/cart${encodeURIComponent(
                    email
                )}`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(newProduct),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to save cart item");
            }

            const savedProduct = await response.json();

            setCartElements((prevCart) => [
                ...prevCart,
                savedProduct,
            ]);

        } catch (error) {
            console.error("Cart error:", error);
        }

    };
    const fetchCart = async () => {
        try {
            const response = await fetch(
                `${CRUDCRUD_BASE_URL}/cart${encodeURIComponent(
                    email
                )}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch cart");
            }

            const data = await response.json();

            setCartElements(data);

        } catch (error) {
            console.error("Fetch cart error:", error);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartElements,
                addToCart,
                fetchCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};