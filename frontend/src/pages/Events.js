import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Events = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>
                Upcoming Events
            </Typography>
            <Box>
                <Typography variant="body1">
                    Stay tuned for exciting events where you can showcase your skills and collaborate with others!
                </Typography>
            </Box>
        </Container>
    );
};

export default Events;
