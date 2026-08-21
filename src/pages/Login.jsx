import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");

        try {
            const response = await fetch(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFbVKOzMxfE1qOHT3w-LVvWs5MrtKZ_rk`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                        returnSecureToken: true,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                let errorMessage = "Login failed. Please try again.";

                if (
                    data.error?.message ===
                    "INVALID_LOGIN_CREDENTIALS"
                ) {
                    errorMessage = "Invalid email or password.";
                }

                throw new Error(errorMessage);
            }

            console.log("Login successful:", data);

            login(data.idToken);

            navigate("/store");

        } catch (error) {
            console.error("Login error:", error);

            setError(error.message);
        }
    };

    return (
        <Container
            className="py-5"
            style={{ maxWidth: "600px" }}
        >
            <h1 className="text-center mb-4">
                Login
            </h1>

            {error && (
                <Alert variant="danger">
                    {error}
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>

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
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </Form.Group>

                <Button
                    type="submit"
                    variant="primary"
                    className="w-100"
                >
                    Login
                </Button>

            </Form>
        </Container>
    );
}

export default Login;