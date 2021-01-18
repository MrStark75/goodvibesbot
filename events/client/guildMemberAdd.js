const { GuildMember } = require("discord.js");

module.exports = (client, Discord, guildMember) => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '💯😎cool person😎💯');
    
    guildMember.roles.add(welcomeRole);
}