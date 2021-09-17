module.exports = {
    name: 'order66',
    description: 'Leaves every server the bot is currently in',
    async execute(client, message, args, Discord, cmd, profileData) {
        if (message.author.id != '394271520186302474') {
            return message.channel.send(`Hey wait a minute, your not Emperor Palpatine. Lets see some identification.`);
        }

        const acceptedRequests = [
            'Yes',
            'yes',
            'No',
            'no',
        ];

        const nope = [
            'No',
            'Nope',
            'no',
            'nah'
        ];

        const filter = ({ author, content }) => message.author == author && acceptedRequests.some((request) => request.toLowerCase() == content.toLowerCase());

        const collector = message.channel.createMessageCollector(filter, {max: 1, time: 35000});

        collector.on('collect', async (m) => {
            try {
                if (m === nope) {
                    return message.channel.send('Canceled order 66');
                }

                function leaveServer(client, Discord) {
                    const allGuilds = client.guilds.cache.forEach(guild => {guild.leave()});
                }
                leaveServer(client, Discord, message);
                return message.channel.send(`The bot has successfully left every server it was currently in. No going back.`);
            }
            catch(err) {
                return console.error(err);
            }
        });

        collector.on('end', (collected, reason) => {
            if (reason == 'time') {
                return message.channel.send(`You have ran out of time to decide to execute order 66.`);
            }
        });

        message.channel.send(`Are you sure you want to do this?\nThis will have the bot leave **every** server it is in,\nand there is no going back.`);
    }
}