module.exports = {
    name: 'kickadel',
    description: 'Kicks people',
    async execute(client, message, args, Discord, cmd) {
        const target = message.mentions.members.first();

        await target.kick()
        .catch(err => {
            message.channel.send(`Didn't work mate, got none of them permissions :/`);
        })

        async function sendInvite(client, message, Discord) {
            const invite = await message.channel.createInvite(
                {
                    maxAge: 604800,
                }
            )
    
            setTimeout(function(){
                target.send(`${invite}`);
            }, 5000);
        }
    
            
        target.send(`Sorry mate, no hard feelings ok? It's just for jokes alright? Just some mischievous acts of tomfoolery.`);
        sendInvite(client, message, Discord);
        message.channel.send(`Successfully kicked adel. what a weenie <:trol:768984995515334677>`);
    }
}