import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Grid,
    Link,
} from "@mui/material";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        // Basic validation
        if (!email || !password) {
            setError("Both email and password are required.");
            return;
        }

        // Example validation (replace this with actual authentication logic)
        const isValidEmail = email.includes("@");
        const isValidPassword = password.length >= 6;

        if (!isValidEmail) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!isValidPassword) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        // Clear any errors
        setError("");

        // Proceed to login logic (e.g., API call)
        console.log("Login successful");
        navigate("/dashboard");
    };

    const handleSkip = () => {
        navigate("/dashboard");
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 8,
                    padding: 3,
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        marginBottom: 2,
                        fontWeight: "bold",
                        color: "#1976d2",
                        textAlign: "center",
                    }}
                >
                    Login
                </Typography>
                {error && (
                    <Typography
                        variant="body2"
                        color="error"
                        sx={{ marginBottom: 2 }}
                    >
                        {error}
                    </Typography>
                )}
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2, marginBottom: 2 }}
                    onClick={handleLogin}
                >
                    Login
                </Button>

                {/* Skip Option */}
                <Typography variant="body2" sx={{ marginTop: 2, color: "gray" }}>
                    Don't want to log in?{" "}
                    <Link
                        component="button"
                        variant="body2"
                        onClick={handleSkip}
                        sx={{
                            textDecoration: "none",
                            color: "#1976d2",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        Skip
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;
