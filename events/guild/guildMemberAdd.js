module.exports = (client, Discord, guildMember, guild) => {
    try {
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
    catch(err) {
        console.error(err)
        async function DMcreator(client, Discord) {
            const creator = await client.fetchApplication();
            creator.owner.send(`There was a error adding the "Cool Person" role to "${guildMember}" at "${guild}".`);
        }
        DMcreator(client, Discord);
    }
}