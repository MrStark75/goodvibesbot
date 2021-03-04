const profileModel = require(`../models/profileSchema`);

module.exports = {
    name: 'sell',
    cooldown: 10,
    description: 'Sell items'   ,
    async execute(client, message, args, Discord, cmd, profileData) {

        if (!profileData) {
            return message.reply('Please use `%beg` first to create profile, then sell item.');
        } else {
            this.cooldown = 0;
        }

        const item = (args[0]);
        const amount = (args[1]);

        if (!item) {
            return message.reply('Please specify an item to sell.');
        } else {
            this.cooldown = 0;
        }

        if (!amount) {
            return message.reply('Please specify an amount.');
        }

        if (item === 'gun') {
            const sellGun = await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                items: {
                    gun: { quantity: -amount }
                }
            })
        }

        return message.channel.send(`Successfully sold ${amount} ${item}!`);
    }
}