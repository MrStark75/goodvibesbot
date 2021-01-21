module.exports = {
    name: 'hap',
    description: "Shows the happy michael face",
    execute(client, message, args, Discord) {
        message.channel.send(`<:hap_micheal:610166904471945236>`);
    }
}