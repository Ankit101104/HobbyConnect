const express = require('express');
const router = express.Router();
const Club = require('../models/Club');
const { protect } = require('../middleware/authMiddleware');

// Get all clubs (Public)
router.get('/', async (req, res) => {
    try {
        const clubs = await Club.find();
        res.json(clubs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Create a club (Protected)
router.post('/', protect, async (req, res) => {
    const { name, description } = req.body;
    try {
        const club = await Club.create({ name, description });
        res.status(201).json(club);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;