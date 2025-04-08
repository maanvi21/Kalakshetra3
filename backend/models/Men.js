const mongoose = require('mongoose');
const { getDatabase } = require('../config/db'); // Import the getDatabase function

// Get the Men database
const menDB = getDatabase("Men");

// Define Schema
const MenSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true } // Store base64 string or URL instead of Buffer
}, { timestamps: true });

// Create models for specific collections inside the "Men" database
const Shirts = menDB.model('Shirts', MenSchema, 'shirts');
const Trousers = menDB.model('Trousers', MenSchema, 'trousers');
const Jackets = menDB.model('Jackets', MenSchema, 'jackets');
const Shoes = menDB.model('Shoes', MenSchema, 'shoes');

// Export models
module.exports = { Shirts, Trousers, Jackets, Shoes };
