module.exports = {
    name: 'balance',
    cooldown: 5,
    aliases: ['bal'],
    description: 'Check your balence',
    execute(client, message, args, Discord, cmd, profileData) {
        const wallet = profileData;

        if (!wallet) {
            return message.reply('You have no coins yet! Do `%beg` first.');
        }

        message.reply(`You have **${profileData.coins}** coins.`);
        
    }
}