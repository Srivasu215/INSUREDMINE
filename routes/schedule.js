const express = require('express');
const nodeSchedule = require('node-schedule');
const Message = require('../models/Message');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const Message = await Message.find();
        res.json(Message);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/schedule', async (req, res) => {
    try {
        let { message, day, time } = req.body;
        let [hour, minute] = time.split(':').map(Number);

        let job = nodeSchedule.scheduleJob({ hour, minute, dayOfWeek: day }, async () => {
            const newMessage = new Message({ message });
            await newMessage.save();
        });

        // Respond with a simplified object containing job details
        res.json({
            scheduled: true,
            message,
            schedule: { day, time }
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
});


module.exports = router;
