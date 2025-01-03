const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: String,
    club: { type: mongoose.Schema.Types.ObjectId, ref: 'Club', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);