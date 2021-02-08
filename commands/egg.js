module.exports = {
    name: 'egg',
    description: "Presents an egg",
    execute(client, message, args, Discord, cmd){
        message.channel.send(':egg:');
    }
}