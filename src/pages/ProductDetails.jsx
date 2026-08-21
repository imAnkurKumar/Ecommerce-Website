import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { productsArr } from "../data/products";

function ProductDetails() {
    const { productId } = useParams();

    const product = productsArr.find(
        (item) => item.id === productId
    );

    const [selectedImage, setSelectedImage] = useState(
        product?.imageUrl
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

            {/* Product section */}
            <Row>

                {/* Images */}
                <Col md={6}>

                    {/* Main Image */}
                    <div className="text-center mb-4">
                        <Image
                            src={selectedImage}
                            fluid
                            style={{
                                maxHeight: "450px",
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    {/* Thumbnail Images */}
                    <div className="d-flex justify-content-center gap-3">

                        {product.images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                thumbnail
                                onClick={() => setSelectedImage(image)}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                    cursor: "pointer",
                                }}
                            />
                        ))}

                    </div>

                </Col>

                {/* Product information */}
                <Col md={6}>

                    <h1>{product.title}</h1>

                    <h3 className="mt-3">
                        ₹ {product.price}
                    </h3>

                </Col>

            </Row>

            {/* Reviews */}
            <hr className="my-5" />

            <h2 className="text-center mb-4">
                Reviews
            </h2>

            <Row>
                <Col md={8} className="mx-auto">

                    {product.reviews.map((review) => (
                        <div
                            key={review.id}
                            className="border rounded p-3 mb-3"
                        >
                            <h5>{review.name}</h5>

                            <p className="mb-2">
                                {"⭐".repeat(review.rating)}
                            </p>

                            <p className="mb-0">
                                {review.comment}
                            </p>
                        </div>
                    ))}

                </Col>
            </Row>

        </Container>
    );
}

export default ProductDetails;