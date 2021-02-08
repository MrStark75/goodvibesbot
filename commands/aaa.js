module.exports = {
    name: 'aaa',
    description: 'Shows the aaa emoji',
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:aaa:794414641731600415>`);
    }
}