const mongoose = require('mongoose');

const AgentSchema = mongoose.Schema({
    agent: { type: String, required: true }
});

module.exports = mongoose.model('Agent', AgentSchema);
