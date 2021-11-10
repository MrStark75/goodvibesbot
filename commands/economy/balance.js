const profileModel = require(`../../models/profileSchema`);
const profileData = require(`../../events/guild/message`);

module.exports = {
    name: 'balance',
    cooldown: 5,
    aliases: ['bal'],
    description: 'Check your balence',
    async execute(client, message, args, Discord, cmd, profileData) {

        const user = message.mentions.users.first() || message.author;
        const userTag = message.mentions.users.first() || message.author;

        const wallet = await profileModel.findOne({ userID: user.id })

        if (!profileData) {
            return message.reply('You have no coins yet! Do `%beg` first.');
        }

        message.channel.send(`${userTag} has **${wallet.coins}** coins.`);
        
    }
}