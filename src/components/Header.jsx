import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">E-Commerce</Navbar.Brand>

                <Nav className="ms-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Store</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;