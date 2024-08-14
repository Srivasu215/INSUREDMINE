const User = require('../../models/User');
const LOB = require('../../models/LOB');
const Carrier = require('../../models/Carrier');
const Agent = require('../../models/Agent');
const Policy = require('../../models/Policy');


const StartFunc = async (row) => {

    try {
        const LocafindOnePolicy = await Policy.findOne({ company_name: row.company_name });
        if (LocafindOnePolicy === null) {
            const LocafindOneUser = await User.findOne({ email: row.email });
            const LocafindOneLOB = await LOB.findOne({ category_name: row.category_name });
            const LocafindOneCarier = await Carrier.findOne({ company_name: row.company_name });
            const LocafindOneResagent = await Agent.findOne({ agent: row.agent });

            const LocaResPolicy = await Policy.create({
                policy_number: row.policy_number,
                policy_start_date: new Date(row.policy_start_date),
                policy_end_date: new Date(row.policy_end_date),
                categoryId: LocafindOneLOB,
                carrierId: LocafindOneCarier,
                userId: LocafindOneUser,
                agentId: LocafindOneResagent,
                premium_amount: row.premium_amount,
                policy_type: row.policy_type,
            });
        };

    } catch (error) {

    }

};

module.exports = { StartFunc }