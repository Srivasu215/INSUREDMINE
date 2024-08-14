const os = require('os-utils');
const { exec } = require('child_process');
const schedule = require('node-schedule');

function restartServer() {
    console.log('CPU usage exceeded 70%. Restarting server...');
    exec('pm2 restart all', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error restarting server: ${error.message}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
    });
}

function monitorCPUUsage() {
    os.cpuUsage((usage) => {
        const usagePercentage = usage * 100;
        console.log(`Current CPU Usage: ${usagePercentage.toFixed(2)}%`);
        if (usagePercentage > 70) {

            restartServer();
        }
    });
}

// Schedule the job to run every minute
schedule.scheduleJob('* * * * *', monitorCPUUsage);

module.exports = { monitorCPUUsage, restartServer };
