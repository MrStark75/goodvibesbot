require('dotenv').config();

module.exports = {
    name: 'ping',
    description: 'checks the ping of the bot',
    async execute(client, message, args, Discord, cmd) {
        const msg = await message.channel.send('Pinging...')
        msg.delete()

        const embed = new Discord.MessageEmbed()
        .setTitle('Ping')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#6b1cb0')
        .addField('Ping:', `\`${Math.floor(msg.createdAt - message.createdAt)}ms\``)
        .addField('API latency:', `\`${Math.round(client.ws.ping)}ms\``)
        .setTimestamp()
        .setFooter('Good Vibes Bot', process.env.avatar);
        message.channel.send(embed)
    }
}