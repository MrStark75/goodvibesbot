module.exports = {
    name: 'whatever',
    aliases: ['what'],
    description: 'Shows a whatever emoji',
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:whatever:794415094091087882>`);
    }
}