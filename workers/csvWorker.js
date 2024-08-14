const { parentPort, workerData } = require('worker_threads');
const fs = require('fs');
const csv = require('csv-parser');
const Agent = require('./Agent/EntryFile');
const User = require('./User/EntryFile');
const Account = require('./Account/EntryFile');
const LOB = require('./LOB/EntryFile');
const Carrier = require('./Carrier/EntryFile');
const Policy = require('./Policy/EntryFile');

const LocalDb = require('../db');

async function processCSV(filePath) {
    const results = [];

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            for (const row of results) {

                await Agent.StartFunc(row)
                await User.StartFunc(row)
                await Account.StartFunc(row)
                await LOB.StartFunc(row)
                await Carrier.StartFunc(row)
                await Policy.StartFunc(row)
            };

            fs.unlinkSync(filePath);
            console.log("CSV successfully");

            parentPort.postMessage('CSV data inserted successfully');
        });
}

async function main() {
    await LocalDb.connectToDatabase();
    processCSV(workerData.filePath).catch((err) => parentPort.postMessage(`Error: ${err.message}`));
}

main().catch((err) => parentPort.postMessage(`Error: ${err.message}`));
