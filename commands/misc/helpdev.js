require('dotenv').config();

module.exports = {
    name: 'helpdev',
    cooldown: 10,
    description: 'Shows a list of dev commands for Good Vibes Bot',
    execute(client, message, args, Discord, cmd) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6b1cb0')
        .setTitle('Dev Help Menu')
        .setAuthor('Good Vibes Bot', process.env.avatar)
        .setDescription(`This shows the dev commands for Good Vibes Bot.\n\n`)
        .addFields(
            {name: '%announce', value: 'Send a global announcement'},
            {name: '%dm', value: 'Send a user a direct message with the bot'},
            {name: '%order66', value: 'Your not Emperor Palpatine, lets see some identification'},
            {name: '%ping', value: 'Calculates the bots ping and API latency'},
            {name: '%suggestions', value: 'Submit suggestions for server owners'},
        )
        .setTimestamp()
	    .setFooter('Most of these commands require certain permissions', process.env.avatar);
      
        message.channel.send(newEmbed);
    }
}