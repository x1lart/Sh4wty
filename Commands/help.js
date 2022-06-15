const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
    const commands = client.commands.map(command => command.name).join(", ")
    const embed = new Discord.MessageEmbed()
    .setTitle(`Shawty commands: ${client.commands.size}`)
    .setDescription(commands)
    .setFooter("My prefix is -")
    .setFooter("Also ping me if u want to start talking w/ me)")
    message.channel.send({embeds:[embed]})
}
module.exports.name = "help"