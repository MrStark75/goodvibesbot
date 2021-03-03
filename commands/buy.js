const profileModel = require(`../models/profileSchema`);

module.exports = {
    name: 'buy',
    cooldown: 10,
    description: 'To be able to buy items',
    async execute(client, message, args, Discord, cmd, profileData) {

        if (!profileData) {
            return message.reply('Please use `%beg` first to create profile, then buy item.');
        } else {
            this.cooldown = 0;
        }

        const item = (args[0]);
        const amount = (args[1]);
        const wallet = profileData.coins;

        if (!item) {
            return message.reply('Please specify an item to buy.');
        } else {
            this.cooldown = 0;
        }

        if (!amount) {
            return message.reply('Please specify an amount.');
        } else {
            this.cooldown = 0;
        }
        
        if (amount > profileData.coins) {
            return message.reply(`You do not have enough coins to buy ${item}!`);
        }

        if (item === 'gun') {

            const cost = amount * 50000;

            if (wallet < cost) {
                return message.reply(`You do not have enough coins to buy ${item}!`);
            } else {
                this.cooldown = 0;
            }

            const buyGun = await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: { gun: amount, coins: -cost }
            });
        }

        return message.channel.send(`Successfully bought ${amount} ${item}(s)!`);
    }
}