module.exports = {
    name: 'help',
    description: 'Shows the help menu',
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6b1cb0')
        .setTitle('Help Menu')
        .setAuthor('Good Vibes Bot', 'https://cdn4.vectorstock.com/i/1000x1000/44/28/neon-sign-good-vibes-only-vector-27224428.jpg')
        .setDescription('This shows the commands for Good Vibes Bot.')
        .addFields(
            {name: '%vibe', value: 'Gives some good vibes.'},
            {name: '%breathe', value: 'Shows a simple breath exercise.'},
            {name: '%wholesome', value: 'Shows some wholesome gifs.'},
            {name: '%dogs', value: 'Shows some cute dogs pics.'},
            {name: '%pets', value: "Shows the many pictures of everyone's pets"},
        )
        .setTimestamp()
	    .setFooter('Good Vibes Bot is under Copyright', 'https://cdn4.vectorstock.com/i/1000x1000/44/28/neon-sign-good-vibes-only-vector-27224428.jpg');

        message.channel.send(newEmbed);
    }
}