import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const response = await axios.get("/api/clubs");
                setClubs(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching clubs", error);
                setLoading(false);
            }
        };

        fetchClubs();

        socket.on("new-club", (club) => {
            setClubs((prevClubs) => [...prevClubs, club]);
        });

        return () => {
            socket.off("new-club");
        };
    }, []);

    if (loading) return <CircularProgress />;

    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>
                Clubs
            </Typography>
            <Grid container spacing={3}>
                {clubs.map((club) => (
                    <Grid item xs={12} sm={6} md={4} key={club._id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{club.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {club.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Join
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Clubs;