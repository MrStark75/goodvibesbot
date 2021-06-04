module.exports = {
    name: 'ummmm',
    aliases: ['um', 'umm', 'ummm'],
    description: 'Shows a ummmm emoji',
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:ummmm:794415181325139988>`);
    }
}