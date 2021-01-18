module.exports = {
    name: 'robot',
    description: 'Presents a robot face.',
    execute(client, message, args, Discord){
        message.channel.send(':robot:')
    }
}