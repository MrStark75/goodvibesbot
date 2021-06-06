require('dotenv').config();
const { BitField } = require('discord.js');
const { now } = require('mongoose');
const profileModel = require(`../../models/profileSchema`);

const DisabledCommands = "false";

const cooldowns = new Map();

module.exports = async (client, Discord, message) => {
    const prefix = '%';

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (!message.guild) return;

    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id })
        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                userTag: message.author.tag,
                coins: 100,
            });
            profile.save();
        }
    }
    catch(err) {
        console.error(err)
        message.reply(`Could not load profile data or could not create profile.`);
    }


    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if (!command) return message.channel.send('This command does not exist, type `%help` for info on commands.');

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if (time_stamps.has(message.author.id)) {
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if (current_time < expiration_time) {
            const time = expiration_time - current_time;

            const seconds_left = Math.floor( (time/1000) % 60 );
            const minutes_left = Math.floor( (time/1000/60) % 60 );
            const hours_left = Math.floor( (time/(1000*60*60)) % 24 );
            const days_left = Math.floor( time/(1000*60*60*24) );

            return message.reply(`Please wait ${hours_left.toFixed(0)}h and ${minutes_left.toFixed(0)}m and ${seconds_left.toFixed(1)}s before reusing the "${command.name}" command!`);
        }
    }

    time_stamps.set(message.author.id, current_time);

    try {
        setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount)
    }
    catch(err) {
        console.error(err)
    }

    let tipsArray = [
        "Did you know that the snipe command has a 1-minute timer before the deleted message is unretriveable?",
        "Have you tried the economy here on Good Vibes bot? Try **%beg** to start your journey!",
        "The economy here on Good Vibes bot has a daily, try **%daily** to get your daily 1000 coins!",
        "Did someone delete a message before you could see? Try **%snipe** to get there message!",
        "Did you know that this bot was coded using the language JavaScript? Which is the language your browser uses to produce web pages!",
        "Did you know you can steal other users coins? Try **%steal <@user>** to try and steal some coins, be careful or you may get caught!"
    ];
    const tips = tipsArray[Math.floor(Math.random() * tipsArray.length)];

    let yesOrNo = ['true', 'false', 'false', 'false', 'false', 'false'];
    const showTips = yesOrNo[Math.floor(Math.random() * yesOrNo.length)];

    try {

        if (DisabledCommands === 'true') {
            message.channel.send('All commands are disabled at this time, until the wellbeing of the administator is healthy. Words of encouragement are welcome during this time. Thank you!');
            return;
        } else {
            command.execute(client, message, args, Discord, cmd, profileData);

            if (showTips === 'true') {
                message.channel.send(`**Tips:** *${tips}*`);
            } else {
                return;
            }

        }

    }
    catch (err) {
        message.reply('There was an error trying to execute this command! Please notify the bot creator of this error.');
        console.error(err);

        async function DMcreator(client, Discord, message) {
            const creator = await client.fetchApplication();
            creator.owner.send(`"${message.author.username}" has thrown an error in "${message.guild}" at ${message.url}`);
        }
        DMcreator(client, Discord, message);
    }
}