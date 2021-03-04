const { MessageManager } = require('discord.js');
const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'use',
    description: 'Use an item',
    async execute(client, message, args, Discord, cmd, profileData) {

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
                const useGunOnTarget = await profileModel.findOneAndUpdate({
                    userID: target
                }, {
                    $set: { coins: 0 }
                });
    
                if (!useGunOnTarget) {
                    return message.reply(`This user does not have an active profile with this bot.`);
                }
    
                const removeGun = await profileModel.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    gun: { quantity: -1 }
                });

                return message.reply(`You shoot a bullet towards ${targetMentions} with a **${item}** and have lost all their **coins**!`);

            }
        }
    }
}