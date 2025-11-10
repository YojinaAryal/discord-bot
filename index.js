const {Client,GatewayIntentBits}= require("discord.js");

const client=new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],

});

client.on("messageCreate",message => {
    console.log(message.content);
})

client.login(
    "MTQzNzQ3MzY4OTczMjkxMTE2NA.GX8BIS.IZVQI1W_-FKXz5Y8uj2rC8WKzUDsBaObErQR2E"
); 