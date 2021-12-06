require('dotenv').config();

module.exports = {
    name: 'helpmisc',
    description: 'Shows the miscellaneous commands for Good Vibes Bot',
    execute(client, message, args, Discord, cmd) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6b1cb0')
        .setTitle('Misc Help Menu')
        .setAuthor('Good Vibes Bot', process.env.avatar)
        .setDescription(`This shows the miscellaneous commands for Good Vibes Bot.\n\n`)
        .addFields(
            {name: '%breathe', value: 'Shows a simple breathing exercise'},
            {name: '%dogs', value: 'Shows some cute dogs pics.'},
            {name: '%pets', value: "Shows the many pictures of everyone's pets."},
            {name: '%vibe', value: 'Feeling down? Get some good vibes from these short phrases'},
            {name: '%wholesome', value: 'Shows some wholesome gifs'},
        )
        .setTimestamp()
	    .setFooter('If you want your pet to be featured in this bot\nJust dm MrStark the picture', process.env.avatar);
      
        message.channel.send(newEmbed);
    }
}