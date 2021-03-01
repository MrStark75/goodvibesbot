const profileModel = require(`../models/profileSchema`);

module.exports = {
    name: 'steal',
    cooldown: 90,
    description: 'Steal coins from another player',
    async execute(client, message, args, Discord, cmd, profileData) {
        const random = Math.floor(Math.random() * 50) + 1;
        const target = message.mentions.users.first().id;
        const targetMentions = (args[0])

        if (!target) {
            message.reply(`Please provide a mention to steal from a user.`);
        }
        if (!targetMentions) {
            message.reply(`Please provide a mention to steal from a user.`);
        }


        if (target) {
            const stealCoinsFromTarget = await profileModel.findOneAndUpdate({
                userID: target
            }, {
                $inc: { coins: -random }
            });

            if (!stealCoinsFromTarget) {
                return message.reply(`This user does not have an active profile with this bot.`);
            }

            const addCoinsToUser = await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: { coins: random }
            })

        } else {
            return message.channel.send(`Please provide a mention to steal from a user.`)
        }

        return message.channel.send(`You stole ${random} coins from ${targetMentions}`);

    }
}