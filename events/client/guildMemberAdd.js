const { guildMember } = require('discord.js');

module.exports = (client, Discord, guildMember) => {
    if (guildMember.guild.id === '609827608951259158') {
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '💯😎cool person😎💯');
    
        guildMember.roles.add(welcomeRole);
    } else {
        if (guildMember.guild.id === '710185464807686195') {
            let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '💯😎cool person😎💯');
    
            guildMember.roles.add(welcomeRole);
        }
    }
}