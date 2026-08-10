import { Container } from "react-bootstrap";

function About() {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">
                About Us
            </h1>

            <div className="text-center">
                <p>
                    Welcome to our E-Commerce Store.
                </p>

                <p>
                    We provide a wide range of products at
                    affordable prices.
                </p>

                <p>
                    Our goal is to provide a simple and
                    enjoyable shopping experience.
                </p>
            </div>
        </Container>
    );
}

export default About;