const express = require('express');
const router = express.Router();
let fs = require('fs');

let multer = require('multer');
const path = require('path');
const { Worker } = require('worker_threads');


let upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), (req, res) => {

    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const oldFilePath = req.file.path;
    const newFilePath = path.join(req.file.destination, `${req.file.filename}.csv`);

    fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
            return res.status(500).send(`Error renaming file: ${err.message}`);
        }
    });

    let LocalWorkerPath = path.join(__dirname, '../workers/csvWorker.js');

    const worker = new Worker(LocalWorkerPath, {
        workerData: { filePath: newFilePath }
    });

    worker.on('message', (msg) => {
        // Send response from worker message
        if (!res.headersSent) {
            res.send(msg);
        }
    });

    worker.on('error', (err) => {
        // Handle worker error
        if (!res.headersSent) {
            res.status(500).send(err.message);
        }
    });

    worker.on('exit', (code) => {
        // Handle worker exit
        if (code !== 0 && !res.headersSent) {
            res.status(500).send(`Worker stopped with exit code ${code}`);
        }
    });
});

module.exports = router;
