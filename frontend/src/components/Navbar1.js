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

const Navbar1 = () => {
    const location = useLocation();

    return (
        <AppBar position="static" sx={{ backgroundColor: "#1976d2", padding: "0.5rem 2rem" }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                    HobbyConnect
                </Typography>
                {/* Homepage Button */}
                <StyledButton
                    color="inherit"
                    component={Link}
                    to="/homepage"
                    disabled={location.pathname === "/homepage"}
                >
                    Homepage
                </StyledButton>
                {/* Explore Button */}
                <StyledButton
                    color="inherit"
                    component={Link}
                    to="/explore"
                    disabled={location.pathname === "/explore"}
                >
                    Explore
                </StyledButton>
                {/* Community Button */}
                <StyledButton
                    color="inherit"
                    component={Link}
                    to="/community"
                    disabled={location.pathname === "/community"}
                >
                    Community
                </StyledButton>
                {/* Message Button */}
                <StyledButton
                    color="inherit"
                    component={Link}
                    to="/message"
                    disabled={location.pathname === "/message"}
                >
                    Message
                </StyledButton>
                {/* Profile Button */}
                <StyledButton
                    color="inherit"
                    component={Link}
                    to="/profile"
                    disabled={location.pathname === "/profile"}
                >
                    Profile
                </StyledButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar1;
