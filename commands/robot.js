module.exports = {
    name: 'robot',
    aliases: ['bot'],
    description: 'Presents a robot emoji',
    execute(client, message, args, Discord, cmd){
        message.channel.send(':robot:')
    }
}