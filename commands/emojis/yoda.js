module.exports = {
    name: 'yoda',
    description: 'Presents a dabbing yoda.',
    execute(client, message, args, Discord, cmd){
        message.channel.send(`<:dabbingyoda:759503614426218526>`)
    }
}