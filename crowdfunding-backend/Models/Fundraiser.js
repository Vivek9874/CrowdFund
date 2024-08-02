const mongoose = require('mongoose');

const fundraiserSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    imageUrl: { type: String, required: true },
});

const Fundraiser = mongoose.model('Fundraiser', fundraiserSchema);
module.exports = Fundraiser;
