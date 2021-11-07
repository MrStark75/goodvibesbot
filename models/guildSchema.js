const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
    serverID: { type: String, require: true },
});

const model = mongoose.model('GuildModels', guildSchema);

module.exports = model;