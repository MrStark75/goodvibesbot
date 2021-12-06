require('dotenv').config();

module.exports = {
    name: 'helpsnipe',
    description: 'Shows the snipe commands for Good Vibes Bot',
    execute(client, message, args, Discord, cmd) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6b1cb0')
        .setTitle('Snipe Help Menu')
        .setAuthor('Good Vibes Bot', process.env.avatar)
        .setDescription(`This shows the snipe commands for Good Vibes Bot.\n\n`)
        .addFields(
            {name: '%snipe', value: 'Snipes a users last deleted message'},
            {name: '%editsnipe', value: 'Snipes a users last edited message'},
        )
        .setTimestamp()
	    .setFooter('Dank Memer no longer has snipe, so now my bot does it', process.env.avatar);
      
        message.channel.send(newEmbed);
    }
}