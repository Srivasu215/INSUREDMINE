const express = require('express');
const Policy = require('../models/Policy');
const User = require('../models/User');

const router = express.Router();

router.get('/search', async (req, res) => {
    try {
        let { username } = req.query;
        let user = await User.findOne({ firstName: username });
        console.log("user:", user._id);

        if (!user) return res.status(404).send('User not found');

        let policies = await Policy.findOne({ userId: user._id })
            .populate('categoryId')
            .populate('carrierId')
            .populate('agentId');


        res.status(200).json(policies);
    } catch (error) {
        res.status(500).send(error.message);
    }
});



router.get('/aggregate', async (req, res) => {
    try {
        let aggregation = await Policy.aggregate([
            { $group: { _id: '$userId', policies: { $push: '$$ROOT' } } },
            { $lookup: { from: 'users', localField: '_id', foreignField: '_id', as: 'user' } },
            { $unwind: '$user' },
            { $project: { user: '$user.firstName', policies: 1 } }
        ]);

        res.status(200).json(aggregation);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
