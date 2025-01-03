const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const { protect } = require('../middleware/authMiddleware');

// Get all events (Public)
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Create an event (Protected)
router.post('/', protect, async (req, res) => {
    const { title, date, location, description } = req.body;
    try {
        const event = await Event.create({ title, date, location, description });
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;