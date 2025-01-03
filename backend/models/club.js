const mongoose = require('mongoose');

const clubSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Club', clubSchema);