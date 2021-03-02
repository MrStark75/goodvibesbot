const profileModel = require(`../models/profileSchema`);

module.exports = {
    name: 'steal',
    cooldown: 60,
    description: 'Steal coins from another player',
    async execute(client, message, args, Discord, cmd, profileData) {

        if (!(args[0])) {
            return message.reply(`Please use a mention to specify the user you want to steal from.`)
        }

        const caught = ['true', 'false', 'false', 'false'];
        const randomCaught = caught[Math.floor(Math.random() * caught.length)];

        const random = Math.floor(Math.random() * 80) + 1;
        const target = message.mentions.users.first().id;
        const targetMentions = (args[0]);

        if (target) {

            if (randomCaught == 'true') {
                message.reply(`You were caught stealing from ${targetMentions} and did not recieve any coins!`);
            }

            if (randomCaught == 'false') {
                const stealCoinsFromTarget = await profileModel.findOneAndUpdate({
                    userID: target
                }, {
                    $inc: { coins: -random }
                });
    
                if (!stealCoinsFromTarget) {
                    return message.reply(`This user does not have an active profile with this bot.`);
                }
    
                const addCoinsToUser = await profileModel.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    $inc: { coins: random }
                })
    
                if (!addCoinsToUser) {
                    return message.reply('Please create an account by using `%beg`, then use steal.');
                }

                return message.channel.send(`You stole ${random} coins from ${targetMentions}`);

            }
        }
    }
}