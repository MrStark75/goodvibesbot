module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    description: 'Creates a suggestion in a channel',
    execute(client, message, args, Discord, cmd) {
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if (!channel) {
            return message.channel.send('Looks like theres no suggestions channel!');
        }
        
        if (!(args[0])) {
            return message.reply('Please make a suggestion like so `%suggestions <suggestion>`.');
        }

        if (channel === message.channel) {
            let messageArgs = args.join(' ');

            const embed = new Discord.MessageEmbed()
            .setColor('#6b1cb0')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs)
            .setTimestamp();

            channel.send(embed).then((msg) => {
                msg.react('✅');
                msg.react('❌');
                message.delete();
            }).catch((err) => {
                return message.reply('Unable to either react to message or delete orginal message.');
            })
        } else {
            return message.reply('Please make a suggestion in the suggestions channel.');
        }
    }
}