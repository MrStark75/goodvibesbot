module.exports = {
    name: 'breathe',
    aliases: ['breath'],
    description: 'Show a breathing excercise',
    execute(client, message, args, Discord, cmd){
        message.channel.send('https://tenor.com/view/calm-relax-breath-in-hold-breath-out-gif-16812651');
    }
}