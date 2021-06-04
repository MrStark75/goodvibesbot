module.exports = {
    name: 'announce',
    description: 'Sends a webhook annoucment to the channel that I specify',
    async execute(client, message, args, Discord, cmd) {
        if (message.member.roles.cache.some(r => r.name === "ADMIN")) {
            try {
                let guild = client.guilds.cache.get('710185464807686195');
                if (guild) {

                    const webhookChannelID = '801590099099123713';
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
            }
            catch (err) {
                console.error(err);
            }
            finally {
                try {
                    let guild = client.guilds.cache.get('609827608951259158');
                    if (guild) {
                        const webhookChannelID = '780168026334560276';
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
                            .catch(console.error);
                    }
                }
                catch (err) {
                    console.error(err);
                }
                finally {
                    try {
                        let guild = client.guilds.cache.get('770353040803889162');
                        if (guild) {
                            const webhookChannelID = '779476099637313605';
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
                                .catch(console.error)
                        }
                    }
                    catch (err) {
                        console.log(err) 
                    }
                    finally {
                        try {
                            let guild = client.guilds.cache.get('748393139533905981');
                            if (guild) {
                                const webhookChannelID = '748401020102508625';
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
                                    .catch(console.error)
                            }
                        }
                        catch (err) {
                            console.log(err) 
                        }
                    }
                }
            }
        } else {
            return message.channel.send('This command does not exist, type `%help` for info on commands.');
        }
    }
}