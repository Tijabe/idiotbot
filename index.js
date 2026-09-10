const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentsBits.Guilds] });


client.once(EventsClientReady, (readyClient) => {
	console.log(`its go time boys, logged in as ${readyClient.user.tag}`);
});

client.login(token);
