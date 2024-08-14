const mongoose = require('mongoose');

const LOBSchema = mongoose.Schema({
    category_name: { type: String, required: true }
});

module.exports = mongoose.model('LOB', LOBSchema);
