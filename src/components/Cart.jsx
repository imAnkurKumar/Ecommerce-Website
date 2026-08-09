import { Offcanvas } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart({ show, handleClose }) {
    const { cartElements } = useContext(CartContext);

    return (
        <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Shopping Cart
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                {cartElements.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartElements.map((item) => (
                        <CartItem
                            key={item.title}
                            item={item}
                        />
                    ))
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Cart;