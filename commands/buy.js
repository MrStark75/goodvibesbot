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
                gun: { quantity: amount },
                $inc: { coins: -cost }
            });

            return message.channel.send(`Successfully bought ${amount} ${item}(s)!`);

        }

        if (item === 'vest') {
            const cost = amount * 5000;

            if (wallet < cost) {
                return message.reply(`You do not have enough coins to buy ${item}!`);
            } else {
                this.cooldown = 0;
            }

            const buyVest = await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                bulletProofVest: { quantity: amount },
                $inc: { coins: -cost }
            })

            return message.channel.send(`Successfully bought ${amount} ${item}(s)!`);

        }
    }
}