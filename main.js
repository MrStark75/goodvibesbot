const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

client.commands = new Discord.Collection();
client.event = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  const H = require(`./handlers/${handler}`); 
  H(client, Discord);

});

// Looks for message
client.on('message', msg => {
  // Looks at content
  if (msg.content === "64") {
    // sends message
    msg.reply('AHA YOU FOUND ' + msg.content);
  }
});

// Connects bot to application / For client: process.env.token
client.login(process.env.token);