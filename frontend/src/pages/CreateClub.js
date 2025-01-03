import React from "react";
import { useForm } from "react-hook-form";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const CreateClub = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post("/api/clubs", data);
            alert("Club created successfully!");
        } catch (error) {
            console.error("Error creating club", error);
            alert("Failed to create club.");
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>
                Create a Club
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                    label="Club Name"
                    fullWidth
                    margin="normal"
                    {...register("name", { required: "Club name is required" })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    label="Description"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    {...register("description", { required: "Description is required" })}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Create Club
                </Button>
            </Box>
        </Container>
    );
};

export default CreateClub;