const profileModel = require(`../../models/profileSchema`);

module.exports = {
    name: 'rich',
    description: 'Shows the a list of the ranks of people coins',
    async execute(client, message, args, Discord, cmd, profileData) {
        if (!profileData) {
            return message.reply('Please use %beg before using other currency commands.')
        }

        const allData = await profileModel.find({})

        const sorted = allData.sort((a, b) => b.coins - a.coins);

        const embed = await new Discord.MessageEmbed()
        .setColor('#6b1cb0')
        .setTitle("Leaderboard for Richest Users")
        .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setDescription("Richest users from top to bottom:");
        for(const allData of sorted) {
            try {
                embed.addField(allData.userTag, `has **${allData.coins}** coins.`);
            } catch {
                return message.reply(`Something went wrong and could not list the users.`)
            }
        }

       return message.channel.send(embed);
    }
}

