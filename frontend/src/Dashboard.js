import React from 'react';
import { Link } from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import { Container, Typography, Grid, Card, CardContent, Button, Box, Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom Theme
const theme = createTheme({
    palette: {
        primary: { main: '#6200ea' },
        secondary: { main: '#ff5722' },
    },
    typography: { fontFamily: "'Poppins', 'Arial', sans-serif" },
});

const StructuredPage = () => {
    const profileImageLink = "C:\Users\Shree\Desktop\HobbyConnect69\frontend\public\images\profile.jpg"; // Your image link

    return (
        <ThemeProvider theme={theme}>
            <Navbar1 />
            <Container
                maxWidth="lg"
                sx={{
                    marginTop: 4,
                    padding: 4,
                    borderRadius: '15px',
                    background: 'linear-gradient(135deg, #e3f2fd, #ede7f6)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                }}
            >
                {/* Profile Header */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        marginBottom: 4,
                    }}
                >
                    <Avatar
                        src={profileImageLink} // Using the direct image link
                        alt="Your Profile"
                        sx={{
                            width: 120,
                            height: 120,
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            marginBottom: 2,
                        }}
                    />
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#6200ea' }}>
                        Hello, GUEST!
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', color: '#37474f' }}>
                        Welcome back! Let's make today productive and exciting.
                    </Typography>
                </Box>

                {/* Dashboard Cards */}
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Link to="/profile" style={{ textDecoration: 'none' }}>
                            <Card
                                sx={{
                                    borderRadius: '15px',
                                    padding: 2,
                                    textAlign: 'center',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom sx={{ color: '#6200ea' }}>
                                        Profile Overview
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        View and update your profile details, preferences, and account settings.
                                    </Typography>
                                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }} fullWidth>
                                        Manage Profile
                                    </Button>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Link to="/activities" style={{ textDecoration: 'none' }}>
                            <Card
                                sx={{
                                    borderRadius: '15px',
                                    padding: 2,
                                    textAlign: 'center',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom sx={{ color: '#6200ea' }}>
                                        Your Activities
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Check out your recent activities, achievements, and upcoming events.
                                    </Typography>
                                    <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} fullWidth>
                                        View Activities
                                    </Button>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Link to="/community" style={{ textDecoration: 'none' }}>
                            <Card
                                sx={{
                                    borderRadius: '15px',
                                    padding: 2,
                                    textAlign: 'center',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom sx={{ color: '#6200ea' }}>
                                        Community Updates
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Stay informed with the latest news and updates from your community.
                                    </Typography>
                                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }} fullWidth>
                                        Explore Community
                                    </Button>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>

                {/* Footer */}
                <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        Need help or have questions?{' '}
                        <span
                            style={{
                                color: '#6200ea',
                                cursor: 'pointer',
                                textDecoration: 'underline',
                            }}
                        >
                            Contact our support team
                        </span>
                        .
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default StructuredPage;
