require('dotenv').config();

module.exports = {
    name: 'helpeco',
    cooldown: 10,
    description: 'Shows a list of the economy commands for Good Vibes Bot',
    execute(client, message, args, Discord, cmd) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6b1cb0')
        .setTitle('Economy Help Menu')
        .setAuthor('Good Vibes Bot', process.env.avatar)
        .setDescription(`This shows the economy commands for Good Vibes Bot.\n\n`)
        .addFields(
            {name: '%balance', value: 'Shows a users balence, use a mention to finds others'},
            {name: '%buy', value: 'Buy items from the shop'},
            {name: '%daily', value: 'Use daily to get your free 1000 coins'},
            {name: '%praise', value: 'Use this to praise people, maybe some money in return'},
            {name: '%rich', value: 'Lists the users by the richest'},
            {name: '%sell', value: 'Sell your items'},
            {name: '%steal', value: 'Steal users coins, be careful or you may get caught'},
            {name: '%use', value: 'Use a item in your inventory'},
        )
        .setTimestamp()
	    .setFooter('Economy is still under development\nIf commands do not work properly its being worked on', process.env.avatar);
      
        message.channel.send(newEmbed);
    }
}