module.exports = {
    name: 'snipe',
    description: 'Shows a users last deleted message for a channel',
    execute(client, message, args, Discord, deletedMessages) {
        const msg = deletedMessages.get(message.channel.id);
        if (!msg) return message.channel.send("There's nothing to snipe!");

        const embed = new Discord.MessageEmbed()
        .setColor('#13b202')
        .setAuthor(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
        .setDescription(msg.content)
        .setTimestamp();

        message.channel.send(embed).catch(err => console.error(err));
    }
}