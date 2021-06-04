const profileModel = require('../../models/profileSchema');

module.exports = {
    name: 'use',
    cooldown: 20,
    description: 'Use an item',
    async execute(client, message, args, Discord, cmd, profileData) {

        if (!profileData) {
            return message.reply('Please use `%beg` first to create profile, then steal from a user.');
        }

        if (!(args[0])) {
            return message.reply('Please specify an item to use!')
        } else {
            this.cooldown = 0;
        }
        
        if (!(args[1])) {
            return message.reply('Please specify a target!');
        } else {
            this.cooldown = 0;
        }

        const caught = ['true', 'false', 'false', 'false'];
        const randomCaught = caught[Math.floor(Math.random() * caught.length)];

        const item = (args[0]);
        const target = message.mentions.users.first().id;
        const targetMentions = (args[1]);

        if (profileData.gun <= 0) {
            return message.reply(`You do not own this item!`);
        } else {
            this.cooldown = 0;
        }

            
        if (item === 'gun') {

            if (randomCaught === 'true') {
                return message.reply(`You shoot a bullet from your **${item}** but miss **${targetMentions}**!`);
            }

            if (randomCaught === 'false') {

                const randomNumber = Math.floor(Math.random() * 1000) + 100;

                const useGunOnTarget = await profileModel.findOneAndUpdate({
                    userID: target
                }, {
                    $inc: { coins: -randomNumber }
                });
    
                if (!useGunOnTarget) {
                    return message.reply(`This user does not have an active profile with this bot.`);
                }
    
                const removeGun = await profileModel.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    $inc: { gun: -1 }
                });

                return message.reply(`You shoot a bullet towards ${targetMentions} with a **${item}** and they lose **${randomNumber} coins**!`);

            }
        }
    }
}