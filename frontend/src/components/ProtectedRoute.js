import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // Check for the token to verify authentication

    if (!token) {
        // If no token, redirect to the login page
        return <Navigate to="/login" />;
    }

    // If authenticated, render the children components
    return children;
};

export default ProtectedRoute;