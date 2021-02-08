module.exports = {
    name: 'ohno',
    description: 'Shows a ohno emoji',
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:ohno:794414685533372418>`);
    }
}