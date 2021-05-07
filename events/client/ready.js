module.exports = (client, Discord) => {
    console.log(`${client.user.tag} is Online!`);
    client.user.setActivity('%help', { type: 'WATCHING' });
}