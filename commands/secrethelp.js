module.exports = {
    name: 'secrethelp',
    description: 'Shows the secret/emote help menu',
    execute(client, message, args, Discord) {
        const newSecretEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Secret/Emote Help Menu')
        .setDescription('This shows the emote commands of Good Vibes Bot.')
        .addFields(
            {name: '%egg', value: 'Presents an egg.'},
            {name: '%yoda', value: "Presents a dabbing yoda."},
            {name: '%robot', value: 'Presents a robot emoji.'},
            {name: '%pog', value: "Presents a pog emoji."},
            {name: '%pain', vaule: 'Presents the pain emoji.'},
            {name: '%hap', value: 'Presents a happy michael emoji.'},
            {name: '%fucdis', value: 'Presents a fucdis emoji.'},
            {name: '%loveowo', value: 'Presents a loveowo emoji.'},
            {name: '%sospisioso', value: 'Presents a sospisioso emoji.'},
            {name: '%ummmm', value: 'Presents a ummmm emoji.'},
            {name: '%woahwhat', value: 'Presents a woahwhat emoji.'},
            {name: '%imoverthis', value: 'Presents a imoverthis emoji.'},
            {name: '%whatever', value: 'Presents a whatever emoji.'},
            {name: '%ohfuc', value: 'Presents a ohfuc emoji.'},
            {name: '%ohno', value: 'Presents a ohno emoji.'},
            {name: '%aaa', value: 'Presents a aaa emoji.'},
        )
        message.channel.send(newSecretEmbed);
    }
}