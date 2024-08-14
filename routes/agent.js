const express = require('express');
const Agent = require('../models/Agent');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user = await Agent.find();
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});



router.post('/', async (req, res) => {
    console.log(typeof (req.body));

    try {
        const LocalRes = await Agent.create(req.body);

        res.json(LocalRes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
