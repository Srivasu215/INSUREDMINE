const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    account_name: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Account', AccountSchema);
