module.exports = {
    name: 'imoverthis',
    aliases: ['im','imover', 'overthis'],
    description: 'Shows the imoverthis emoji',
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:imoverthis:794415131760132117>`);
    }
}