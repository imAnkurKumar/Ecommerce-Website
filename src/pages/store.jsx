import { Container, Row, Col } from "react-bootstrap";
import { productsArr } from "../data/products";
import ProductCard from "../components/ProductCard";

function Store() {
    return (
        <Container className="my-5">

            <h1 className="text-center mb-5">
                Products
            </h1>

            <Row className="g-4">

                {productsArr.map((product) => (
                    <Col
                        key={product.title}
                        md={6}
                        lg={3}
                    >
                        <ProductCard product={product} />
                    </Col>
                ))}

            </Row>

        </Container>
    );
}

export default Store;