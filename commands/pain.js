module.exports = {
    name: 'pain',
    description: 'Shows the pain emoji',
    execute(client, message, args, Discord) {
        message.channel.send(`<:pain:797651962128236564>`);
    }
}