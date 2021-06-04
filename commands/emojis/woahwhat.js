module.exports = {
    name: 'woahwhat',
    aliases: ['woah'],
    desscription: 'Shows a woahwhat emoji',
    execute(client, message, args, Discord, cmd) {
        message.channel.send(`<:woahwhat:794415153881546762>`);
    }
}