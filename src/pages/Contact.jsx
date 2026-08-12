import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "https://ecommerce-shp-default-rtdb.firebaseio.com/contacts.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            console.log("Firebase response:", data);

            if (!response.ok) {
                throw new Error(
                    data.error || "Failed to submit contact form"
                );
            }

            console.log("Contact saved:", data);

            alert("Your details have been submitted successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
            });

        } catch (error) {
            console.error("Error:", error);

            alert(error.message);
        }
    };

    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">
                Contact Us
            </h1>

            <Form
                onSubmit={handleSubmit}
                className="mx-auto"
                style={{ maxWidth: "600px" }}
            >
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>

                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>

                    <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                    />
                </Form.Group>

                <div className="text-center">
                    <Button type="submit" variant="primary">
                        Submit
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default Contact;