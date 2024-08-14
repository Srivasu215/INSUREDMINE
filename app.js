const express = require('express');
const app = express();
let bodyparser = require("body-parser");

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 2004;
const cpuMonitor = require('./monitor');
app.use(express.json());
app.use(bodyparser.json());

const LocalDb = require('./db');

// Import routes
const uploadRoutes = require('./routes/upload');
const agentRoutes = require('./routes/agent');
const LOBRoutes = require('./routes/LOB');
const carrierRoutes = require('./routes/carrier');
const policyRoutes = require('./routes/policy');
const Localschedule = require('./routes/schedule');

app.get('/', (req, res) => {
    res.send("<h1>Hello INSUREDMINE</h1>")
});
// Use routes
app.use('/api', uploadRoutes);
// app.use('/api/agents', agentRoutes);
app.use('/api/carriers', carrierRoutes);
app.use('/api/LOB', LOBRoutes);

app.use('/api/policies', policyRoutes);
app.use('/api/particular', Localschedule);
LocalDb.connectToDatabase();
cpuMonitor.monitorCPUUsage();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
