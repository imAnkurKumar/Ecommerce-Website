import { Offcanvas } from "react-bootstrap";
import { cartElements } from "../data/cartData";
import CartItem from "./CartItem";

function Cart({ show, handleClose }) {
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                {cartElements.map((item) => (
                    <CartItem
                        key={item.title}
                        item={item}
                    />
                ))}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Cart;