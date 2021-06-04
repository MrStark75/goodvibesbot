module.exports = {
    name: 'sospisioso',
    aliases: ['sus', 'sos'],
    description: 'Shows the sospicioso emoji',
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:sospisioso:794415207937736764>`);
    }
}