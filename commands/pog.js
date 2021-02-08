module.exports = {
    name: 'pog',
    description: 'Presents a pog face.',
    execute(client, message, args, Discord, cmd){
        message.channel.send(`<:PogChamp:751191834813923428>`)
    }
}