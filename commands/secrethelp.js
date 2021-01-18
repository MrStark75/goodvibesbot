module.exports = {
    name: 'secrethelp',
    description: 'Shows the secret help menu',
    execute(client, message, args, Discord) {
        const newSecretEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Secret Help Menu')
        .setDescription('This shows the hidden commands of Good Vibes Bot.')
        .addFields(
            {name: '%egg', value: 'Presents an egg.'},
            {name: '%yoda', value: "Presents a dabbing yoda."},
            {name: '%robot', value: 'Presents a robot face.'},
            {name: '%pog', value: "Presents a pog face."}
         
        )
        message.channel.send(newSecretEmbed);
    }
}