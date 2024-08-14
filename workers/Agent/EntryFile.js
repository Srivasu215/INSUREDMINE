const Agent = require('../../models/Agent');

const StartFunc = async (row) => {

    try {
        const LocafindOneResagent = await Agent.findOne({ agent: row.agent });
        if (LocafindOneResagent === null) {
            const LocaResagent = await Agent.create({ agent: row.agent });
        };

    } catch (error) {

    }

};

module.exports = { StartFunc }