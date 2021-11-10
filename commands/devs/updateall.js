const profileModel = require('../../models/profileSchema');

module.exports = {
    name: 'updateall',
    description: 'Updates all documents in the Good Vibes Bot database',
    async execute(client, message, args, Discord, cmd) {
        // didn't work out
        const myQuery = { userTag: /^/ };

        const profileUpdate = await profileModel.updateMany(myQuery, newvalues, function(err) {
            if (err) throw err;
            console.log(res.result.nModified + " document(s) updated");
        });
    }
}