import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0, 1),
    position: "relative",
    "&:hover": {
        color: "#90caf9", // Hover text color
    },
    "&:hover::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -2,
        height: 2,
        backgroundColor: "#90caf9", // Underline color
        transform: "scaleX(1)",
        transition: "transform 0.3s ease",
    },
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -2,
        height: 2,
        backgroundColor: "transparent",
        transform: "scaleX(0)",
        transition: "transform 0.3s ease",
    },
}));

const Navbar = () => {
    const location = useLocation();

    // Hide navbar on the /dashboard route
    if (location.pathname === "/dashboard") {
        return null;
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: "#1976d2", padding: "0.5rem 2rem" }}>
            <Toolbar>
                <Typography align="center" variant="h4" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                    HobbyConnect
                </Typography>
                {/* <StyledButton
                    color="inherit"
                    component={Link}
                    to="/"
                    disabled={location.pathname === "/"}
                >
                    Home
                </StyledButton>
                <StyledButton
                    color="inherit"
                    component={Link}
                    to="/register"
                    disabled={location.pathname === "/register"}
                >
                    Register
                </StyledButton>
                <StyledButton
                    color="inherit"
                    component={Link}
                    to="/login"
                    disabled={location.pathname === "/login"}
                >
                    Login
                </StyledButton> */}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
