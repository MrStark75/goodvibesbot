module.exports = {
    name: 'fucdis',
    aliases: ['dis'],
    description: 'Shows the fucdis emoji',
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:fucdis:794415257321734144>`);
    }
}