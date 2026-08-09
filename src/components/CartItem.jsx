import { Button, Col, Image, Row } from "react-bootstrap";

function CartItem({ item }) {
    return (
        <Row className="align-items-center border-bottom py-3">
            <Col xs={3}>
                <Image src={item.imageUrl} fluid rounded />
            </Col>

            <Col xs={3}>
                <h6>{item.title}</h6>
            </Col>

            <Col xs={2}>₹ {item.price}</Col>

            <Col xs={2}>Qty: {item.quantity}</Col>

            <Col xs={2}>
                <Button variant="danger" size="sm">
                    Remove
                </Button>
            </Col>
        </Row>
    );
}

export default CartItem;