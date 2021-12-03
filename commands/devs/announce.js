require('dotenv').config();

module.exports = {
    name: 'announce',
    description: 'Sends a webhook annoucment to the channel that I specify',
    async execute(client, message, args, Discord, cmd) {
        if (message.author.id != '394271520186302474') return message.channel.send('This command does not exist, type `%help` for info on commands.')

        const allGuilds = client.guilds.cache;

        try {
            allGuilds.forEach((guild) => {
                /*how can 'guild' be undefined here if it's a argument coming in from forEach*/
                const allGuildChannels = guild.channels.cache; // every guild -> every channel
                const filteredChannels = allGuildChannels.filter(channel => channel.name.match(/goodvibes/gi));

                filteredChannels.forEach( async (channel) => {
                    
                    const webhooks = await channel.fetchWebhooks();
                    let webhook = null;
    
                    if (webhooks.array().length == 0) {
                        webhook = await channel.createWebhook('Good Vibes Bot Status', {
                            avatar: process.env.avatar,
                        });
                    }
                    else {
                        webhook = webhooks.first();
                    }
                    webhook.send(args.join(" "))
                        .then(message => console.log(`Sent message: ${message.content}`))
                        .catch(console.error);

                });
            });
        }
        catch (err) {
            console.error(err);
            return message.channel.send('An error occured when announcing!')
        }
    }
}