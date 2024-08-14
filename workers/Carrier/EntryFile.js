const Carrier = require('../../models/Carrier');

const StartFunc = async (row) => {

    try {
        const LocafindOneCarier = await Carrier.findOne({ company_name: row.company_name });

        if (LocafindOneCarier === null) {
            const LocaResLOB = await Carrier.create({ company_name: row.company_name });
        };

    } catch (error) {

    }

};

module.exports = { StartFunc }