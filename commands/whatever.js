module.exports = {
    name: 'whatever',
    description: 'Shows a whatever emoji',
    execute(client, message, args, Discord) {
        message.channel.send(`<:whatever:794415094091087882>`);
    }
}