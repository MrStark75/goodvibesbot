module.exports = {
    name: 'dm',
    description: 'Direct messages a user with a specific response',
    execute(client, message, args, Discord, cmd) {
        const response = args.slice(1, 100).join(" ");
        const recipient = client.users.cache.get(args[0]).id;

        recipient.send(response);
    }
}