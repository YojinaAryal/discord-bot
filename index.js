require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});


client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  console.log(message.content);
  message.reply({
    content: "Hi From Bot",
  });
});

client.on("interactionCreate",)
console.log('TOKEN from env:', process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKEN);
