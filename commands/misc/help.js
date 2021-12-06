require('dotenv').config();

module.exports = {
    name: 'help',
    cooldown: 10,
    description: 'Shows the help menu',
    execute(client, message, args, Discord, cmd) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6b1cb0')
        .setTitle('Help Menu')
        .setAuthor('Good Vibes Bot', process.env.avatar)
        .setDescription(`This shows the commands for Good Vibes Bot.\n\n`)
        .addFields(
            {name: 'Dev Commands', value: '%helpdev'},
            {name: 'Economy Commands', value: '%helpeco'},
            {name: 'Emoji Commands', value: '%helpemoji'},
            {name: 'Miscellaneous Commands', value: '%helpmisc'},
            {name: 'Snipe Commands', value: '%helpsnipe'}
        )
        .setTimestamp()
	    .setFooter('Good Vibes Bot is under TechnoNinja supervision', process.env.avatar);
      
        message.channel.send(newEmbed);
    }
}