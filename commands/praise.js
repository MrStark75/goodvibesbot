const profileModel = require(`../models/profileSchema`);

module.exports = {
    name: 'praise',
    aliases: ['beg'],
    cooldown: 20,
    description: 'a beg command to get coins',
    async execute(client, message, args, Discord, cmd) {
        const random = Math.floor(Math.random() * 100) + 1;
        const addAmount = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        }, {
            $inc: { coins: random }
        });
        
        return message.channel.send(`You praised a person on the street with good vibes, they gave you ${random} coins to thank you.`);
    }
}