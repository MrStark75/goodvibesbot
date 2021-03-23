module.exports = {
    name: 'help',
    cooldown: 10,
    description: 'Shows the help menu',
    execute(client, message, args, Discord, cmd) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6b1cb0')
        .setTitle('Help Menu')
        .setAuthor('Good Vibes Bot', 'https://cdn4.vectorstock.com/i/1000x1000/44/28/neon-sign-good-vibes-only-vector-27224428.jpg')
        .setDescription('This shows the commands for Good Vibes Bot.')
        .addFields(
            {name: '%vibe', value: 'Gives some good vibes.', inline: true},
            {name: '%breathe', value: 'Shows a simple breath exercise.', inline: true},
            {name: '%wholesome', value: 'Shows some wholesome gifs.', inline: true},
            {name: '%dogs', value: 'Shows some cute dogs pics.', inline: true},
            {name: '%pets', value: "Shows the many pictures of everyone's pets.", inline: true},
            {name: '%praise or %beg', value: 'Praise or send good vibes to people to get cash money.', inline: true},
            {name: '%balance', value: 'Get your current balance.', inline: true},
            {name: '%daily', value: 'Collect your daily coins.'},
            {name: '%steal @userTarget', value: 'Steal a random amount of money from a specified user.', inline: true},
            {name: '%rich', value: 'See the richest users, from top to bottom.', inline: true},
            {name: '%suggestions', value: 'Make suggestions about a certain topic.', inline: true},
        )
        .setTimestamp()
	    .setFooter('Good Vibes Bot is under TechnoNinja supervision', 'https://cdn4.vectorstock.com/i/1000x1000/44/28/neon-sign-good-vibes-only-vector-27224428.jpg');
      
        message.channel.send(newEmbed);
    }
}