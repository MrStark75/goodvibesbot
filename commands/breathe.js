module.exports = {
    name: 'breathe',
    description: 'Show a breathing excercise',
    execute(client, message, args, Discord){
        message.channel.send('https://tenor.com/view/calm-relax-breath-in-hold-breath-out-gif-16812651');
    }
}