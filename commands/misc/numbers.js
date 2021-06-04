const { description, execute } = require("./vibe");

module.exports = {
    name: 'numbers',
    description: 'Find hidden numbers within the bot',
    execute(client, message, args, Discord, cmd){
        message.reply('AHA YOU FOUND IT')
    }
}