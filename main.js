const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const mongoose = require('mongoose');

const deletedMessages = new Discord.Collection(); // collections of snipe messages
const editedMessages = new Discord.Collection();

module.exports = { deletedMessages, editedMessages }

client.commands = new Discord.Collection();
client.event = new Discord.Collection();

// requiring all the handlers
['command_handler', 'event_handler'].forEach(handler => {
  const H = require(`./handlers/${handler}`);
  H(client, Discord);
});

// connect to the database
mongoose.connect(process.env.MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database!');
}).catch((err) => {
  console.log(err);
});

client.on('messageDelete', message => {
  deletedMessages.set(message.channel.id, message);
  setTimeout(() => deletedMessages.delete(message.channel.id), 60000);
});
// Listen for edited and deleted messages
client.on('messageUpdate', message => {
  editedMessages.set(message.channel.id, message);
  setTimeout(() => editedMessages.delete(message.channel.id), 60000);
});

// Looks for message
client.on('message', msg => {
  // Looks at content
  if (msg.content === "21") {
    msg.reply('AHA YOU FOUND ' + msg.content);
  }
});

// Connects bot to application / For client: process.env.token
client.login(process.env.token);