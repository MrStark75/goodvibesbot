module.exports = {
    name: 'loveowo',
    description: 'Shows the loveowo emoji',
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:loveowo:794415230956470314>`);
    }
}