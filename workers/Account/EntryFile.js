const Account = require('../../models/Account');
const User = require('../../models/User');

const StartFunc = async (row) => {

    try {
        const LocafindOneAccount = await Account.findOne({ account_name: row.account_name });
        if (LocafindOneAccount === null) {
            const LocafindOneUser = await User.findOne({ email: row.email });

            const LocaResUser = await Account.create({ account_name: row.account_name, userId: LocafindOneUser });
        };

    } catch (error) {

    }

};

module.exports = { StartFunc }