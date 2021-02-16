require('dotenv').config();

const cooldowns = new Map();

module.exports = (client, Discord, deletedMessages, editedMessages, message) => {
    const prefix = '%';

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (!message.guild) return;

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
            let timeMinutes_left = (expiration_time - current_time) / 60000;
            let time_Secondsleft = (expiration_time - current_time) / 1000;
            if (timeMinutes_left < 1) {timeMinutes_left = 0;}

            return message.reply(`Please wait ${timeMinutes_left.toFixed(0)} minute(s) or ${time_Secondsleft.toFixed(1)} second(s) before reusing the "${command.name}" command!`);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    try {
        command.execute(client, message, args, Discord, cmd, deletedMessages, editedMessages);
    }
    catch (err) {
        message.reply('There was an error trying to execute this command! Please notify the bot creator of this error.');
        console.error(err);

        async function DMcreator(client, Discord, deletedMessages, editedMessages, message) {
            const creator = await client.fetchApplication();
            creator.owner.send(`"${message.author.username}" has thrown an error in "${message.guild}" at ${message.url}`);
        }
        DMcreator(client, Discord, deletedMessages, editedMessages, message);
    }
}