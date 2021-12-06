require('dotenv').config();

module.exports = {
    name: 'helpemoji',
    cooldown: 10,
    description: 'Shows a list of the emoji commands for Good Vibes Bot',
    execute(client, message, args, Discord, cmd) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6b1cb0')
        .setTitle('Emoji Help Menu')
        .setAuthor('Good Vibes Bot', process.env.avatar)
        .setDescription(`This shows the emoji commands for Good Vibes Bot.\n\n`
            + '%aaa\n'
            + '%egg\n'
            + '%fucdis\n'
            + '%hap\n'
            + '%imoverthis\n'
            + '%loveowo\n'
            + '%ofuc\n'
            + '%hno\n'
            + '%pain\n'
            + '%pog\n'
            + '%robot\n'
            + '%secrethelp\n'
            + '%sospisioso\n'
            + '%ummmm\n'
            + '%whatever\n'
            + '%woahwhat\n'
            + '%yoda\n')
        .setTimestamp()
	    .setFooter('If you want more emojis added, just dm MrStark', process.env.avatar);
      
        message.channel.send(newEmbed);
    }
}