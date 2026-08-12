import {
    Navbar,
    Nav,
    Container,
    Button,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header({ handleShowCart }) {
    const { cartElements } = useContext(CartContext);

    const cartQuantity = cartElements.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand
                    as={NavLink}
                    to="/"
                >
                    E-Commerce
                </Navbar.Brand>

                <Nav className="mx-auto">

                    <Nav.Link
                        as={NavLink}
                        to="/"
                    >
                        Home
                    </Nav.Link>

                    <Nav.Link
                        as={NavLink}
                        to="/store"
                    >
                        Store
                    </Nav.Link>

                    <Nav.Link
                        as={NavLink}
                        to="/about"
                    >
                        About
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="/contact"
                    >
                        Contact Us
                    </Nav.Link>

                </Nav>

                <Button
                    variant="outline-light"
                    onClick={handleShowCart}
                >
                    Cart ({cartQuantity})
                </Button>
            </Container>
        </Navbar>
    );
}

export default Header;