const profileModel = require(`../models/profileSchema`);

module.exports = {
    name: 'daily',
    aliases: ['day', 'dail', 'da'],
    cooldown: 86400,
    description: 'daily rewards in coins',
    async execute(client, message, args, Discord, cmd, profileData) {
        const addAmount = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        }, {
            $inc: { coins: 1000 }
        });

        return message.channel.send(`You collected your daily **1000** coins. Come back tomorrow to collect them again!`);
    }
}