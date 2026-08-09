import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Header({ handleShowCart }) {
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
                    Cart
                </Button>

            </Container>
        </Navbar>
    );
}

export default Header;