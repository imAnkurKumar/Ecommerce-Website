import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { productsArr } from "../data/products";

function ProductDetails() {
    const { productId } = useParams();

    const product = productsArr.find(
        (item) => item.id === productId
    );

    if (!product) {
        return (
            <Container className="py-5">
                <h2>Product not found</h2>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <Image
                        src={product.imageUrl}
                        fluid
                    />
                </Col>

                <Col md={6}>
                    <h1>{product.title}</h1>

                    <h3>₹ {product.price}</h3>

                    <h4 className="mt-4">
                        Product Images
                    </h4>

                    <div className="d-flex gap-3">
                        {product.images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                thumbnail
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                }}
                            />
                        ))}
                    </div>
                </Col>
            </Row>

            <hr className="my-5" />

            <h2 className="text-center mb-4">
                Reviews
            </h2>

            {product.reviews.map((review) => (
                <div
                    key={review.id}
                    className="border rounded p-3 mb-3"
                >
                    <h5>{review.name}</h5>

                    <p>
                        {"⭐".repeat(review.rating)}
                    </p>

                    <p>{review.comment}</p>
                </div>
            ))}
        </Container>
    );
}

export default ProductDetails;