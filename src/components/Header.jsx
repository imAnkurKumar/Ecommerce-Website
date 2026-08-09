import { Navbar, Nav, Container, Button } from "react-bootstrap";
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
                <Navbar.Brand>E-Commerce</Navbar.Brand>

                <Nav className="mx-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Store</Nav.Link>
                    <Nav.Link>About</Nav.Link>
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