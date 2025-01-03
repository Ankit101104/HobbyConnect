import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

// Define a styled component for the background container
const BackgroundContainer = styled(Box)({
    backgroundImage: "url('https://images.hdqwalls.com/download/planet-dark-black-moon-4k-fj-1920x1080.jpg')", // Replace with your desired moon image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Make the background cover the full screen height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "grey", // Ensuring text is visible on dark backgrounds
});

const Home = () => {
    return (
        <BackgroundContainer>
            <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
                <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", letterSpacing: 1 }}>
                    Welcome to HobbyConnect
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: 18, lineHeight: 1.6 }}>
                    A platform to connect, collaborate, and exchange skills with others
                    who share your hobbies. Join clubs, host events, and grow your
                    creativity together!
                </Typography>
                <Box sx={{ mt: 40 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        href="/register"
                        sx={{
                            backgroundColor: "grey", // Customize button color
                            '&:hover': {
                                backgroundColor: "red", // Hover effect
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Container>
        </BackgroundContainer>
    );
};

export default Home;