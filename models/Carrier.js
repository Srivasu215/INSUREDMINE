const mongoose = require('mongoose');

const CarrierSchema = mongoose.Schema({
    company_name: { type: String, required: true }
});

module.exports = mongoose.model('Carrier', CarrierSchema);
