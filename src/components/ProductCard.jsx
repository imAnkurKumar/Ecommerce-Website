import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);

    return (
        <Card className="h-100 shadow-sm">
            <Link to={`/product/${product.id}`}>
                <Card.Img
                    variant="top"
                    src={product.imageUrl}
                    style={{
                        height: "250px",
                        objectFit: "cover",
                    }}
                />
            </Link>

            <Card.Body className="text-center">
                <Card.Title>
                    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {product.title}
                    </Link>
                </Card.Title>

                <Card.Text>
                    <strong>₹ {product.price}</strong>
                </Card.Text>

                <Button
                    variant="primary"
                    onClick={() => addToCart(product)}
                >
                    Add To Cart
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;