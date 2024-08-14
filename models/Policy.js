const mongoose = require('mongoose');

const PolicySchema = mongoose.Schema({
    policy_number: { type: String, required: true },
    policy_start_date: { type: Date, required: true },
    policy_end_date: { type: Date, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'LOB' },
    carrierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Carrier' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' },
    premium_amount: { type: Number },
    policy_type: { type: String, required: true },
});

module.exports = mongoose.model('Policy', PolicySchema);
