module.exports = {
    name: 'woahwhat',
    desscription: 'Shows a woahwhat emoji',
    execute(client, message, args, Discord) {
        message.channel.send(`<:woahwhat:794415153881546762>`);
    }
}