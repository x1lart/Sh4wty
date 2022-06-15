const Discord = require('discord.js');
const prefix = '-';
const fs = require("fs");
const client = new Discord.Client({
  allowedMentions:{
    parse: [`users`, `roles`],
    repliedUser: true,
  },
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_PRESENCES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGE_REACTIONS",
  ],
});

client.on("ready", () =>{
console.log("i'm here")
client.user.setActivity('-help', {type: 'STREAMING'})

const channelId = '985636174146179152'


    client.on('guildMemberAdd', (member) =>{
        let i = [
          `<@${member.id}> where is our pizza, did u forget?`,
          `Guys, <@${member.id}> has arrived <a:RemSpin:970601229866643470> `,
          `Did you know that <@${member.id}> is a new member of our server?`,
        ]
        let y = i[Math.floor(i.length * Math.random())]
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(`${y}`)
        channel.send("https://tenor.com/view/anime-loli-gif-19359874")

    })

});


client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for(file of commands){
  const commandName = file.split(".")[0]
  const command = require(`./commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("messageCreate", (message) => {
  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return false;

  if (message.mentions.has(client.user.id)) {
      message.channel.send("What the fck are u want?)");
  }
});

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return
    command.run(client, message, args)
  }
})
 





client.login("OTg1NDU5ODg2MjgyNDAzOTIw.GWxwZe.VOk4R4Iz-ynmGmEww5eu6QtuMRAjejDTZtWte0");