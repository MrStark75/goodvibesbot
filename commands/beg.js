const profileModel = require(`../models/profileSchema`);

module.exports = {
    name: 'beg',
    cooldown: 90,
    description: 'a beg command to get coins',
    async execute(client, message, args, Discord, cmd) {
        const random = Math.floor(Math.random() * 100) + 1;
        const addAmount = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        }, {
            $inc: { coins: random }
        });
        
        return message.channel.send(`You begged and recieved ${random} coins.`);
    }
}