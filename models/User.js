const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    dob: { type: Date, required: true },
    address: { type: String },
    phone: { type: String, required: true },
    state: { type: String },
    zip: { type: String },
    email: {
        type: String, required: true, unique: true,
        // Using a regex to validate email format
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    gender: { type: String, enum: ['Male', 'Female', 'other', ''], },
    userType: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
