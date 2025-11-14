require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");



const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,});


client.on("messageCreate",async (message) => {
  if (message.author.bot) return;
   if (!message.content.startsWith("!ask")) return;

  

    const userMessage = message.content;
  console.log(message.content);
  message.reply({
    content: "Hi From Bot",
  });
});

client.on("interactionCreate",interaction=>{
  console.log(interaction);
  interaction.reply("Pong!!")
})
console.log('TOKEN from env:', process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKEN);
