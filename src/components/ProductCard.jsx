import { Card, Button } from "react-bootstrap";

function ProductCard({ product }) {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Img
                variant="top"
                src={product.imageUrl}
                style={{ height: "250px", objectFit: "cover" }}
            />

            <Card.Body className="text-center">
                <Card.Title>{product.title}</Card.Title>

                <Card.Text>
                    <strong>₹ {product.price}</strong>
                </Card.Text>

                <Button variant="primary">
                    Add To Cart
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;