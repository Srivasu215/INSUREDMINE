const LOB = require('../../models/LOB');

const StartFunc = async (row) => {

    try {
        const LocafindOneLOB = await LOB.findOne({ category_name: row.category_name });

        if (LocafindOneLOB === null) {
            const LocaResLOB = await LOB.create({ category_name: row.category_name });
        };

    } catch (error) {

    }

};

module.exports = { StartFunc }