module.exports = {
    name: 'imoverthis',
    description: 'Shows the imoverthis emoji',
    execute(client, message, args, Discord) {
        message.channel.send(`<:imoverthis:794415131760132117>`);
    }
}