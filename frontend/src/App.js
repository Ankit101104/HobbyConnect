import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navigation bar
import Home from "./pages/Home"; // Home page component
import Clubs from "./pages/Clubs"; // Clubs page
import CreateClub from "./pages/CreateClub"; // Create a club page
import Login from "./pages/Login"; // Login page
import Register from "./pages/Register"; // Register page
import Events from "./pages/Events"; // Events page
import ProtectedRoute from "./components/ProtectedRoute"; // Route protection wrapper
import Dashboard from "./Dashboard"; // Dashboard component (with correct casing)
import Homepage from "./pages/Homepage"; // Adjusted for "Homepage"
import Explore from "./pages/Explore";
import Community from "./pages/Community";
import Message from "./pages/Message";
import Profile from "./pages/Profile";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clubs" element={<ProtectedRoute><Clubs /></ProtectedRoute>} />
                <Route path="/create-club" element={<ProtectedRoute><CreateClub /></ProtectedRoute>} />
                <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/community" element={<Community />} />
                <Route path="/message" element={<Message />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
