module.exports = {
    name: 'egg',
    description: "Presents an egg",
    execute(client, message, args, Discord){
        message.channel.send(':egg:');
    }
}