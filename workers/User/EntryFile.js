const User = require('../../models/User');

const StartFunc = async (row) => {

    try {
        const LocafindOneUser = await User.findOne({ email: row.email });
        if (LocafindOneUser === null) {
            const LocaResagent = await User.create({
                firstName: row.firstname,
                dob: new Date(row.dob),
                address: row.address,
                phone: row.phone,
                state: row.state,
                zip: row.zip,
                email: row.email,
                gender: row.gender,
                userType: row.userType
            });
        };

    } catch (error) {

    }

};

module.exports = { StartFunc }