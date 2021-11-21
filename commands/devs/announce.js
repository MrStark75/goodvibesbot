module.exports = {
    name: 'announce',
    description: 'Sends a webhook annoucment to the channel that I specify',
    async execute(client, message, args, Discord, cmd) {
        if (!message.author.id === '394271520186302474') return message.channel.send('This command does not exist, type `%help` for info on commands.')
        
        try {
            let possibleChannelNames = /good|vibes/gi

            const webhookChannelID = client.channels.cache.find(c => c.name === possibleChannelNames);
            const channel = client.channels.cache.get(webhookChannelID)

            const webhooks = await channel.fetchWebhooks();
            let webhook = null;
            if (webhooks.array().length == 0) {
                webhook = await channel.createWebhook('Good Vibes Bot Status', {
                    avatar: 'https://cdn4.vectorstock.com/i/1000x1000/44/28/neon-sign-good-vibes-only-vector-27224428.jpg',
                });
            }
            else {
                webhook = webhooks.first();
            }
            webhook.send(args.join(" "))
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error);
        }
        catch (err) {
            console.error(err);
        }
    }
}