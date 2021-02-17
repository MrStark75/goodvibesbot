module.exports = {
    name: 'ohfuc',
    aliases: ['fuc'],
    description: 'Shows a ohfuc emoji',
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:ohfuc:794414517148057620>`);
    }
}