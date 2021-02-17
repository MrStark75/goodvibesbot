module.exports = {
    name: 'hap',
    aliases: ['happy'],
    description: "Shows the happy michael face",
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:hap_micheal:610166904471945236>`);
    }
}