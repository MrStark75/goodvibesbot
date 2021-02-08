module.exports = {
    name: 'editsnipe',
    description: 'Shows a users last edit to a message',
    execute(client, message, args, Discord, cmd, deletedMessages, editedMessages) {
        const msg = editedMessages.get(message.channel.id);
        if (!msg) return message.channel.send("There's nothing to snipe!");

        const embed = new Discord.MessageEmbed()
        .setColor('#13b202')
        .setAuthor(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
        .setDescription(msg.content)
        .setTimestamp();

        message.channel.send(embed).catch(err => console.error(err));
    }
}