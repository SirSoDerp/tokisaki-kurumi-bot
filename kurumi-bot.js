const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setPresence(
    {
      game : {
        name : config.prefix + "help to conquer the world",
        url : "https://github.com/SirSoDerp/tokisaki-kurumi-bot"
      }
    }
  );
});

client.on('message', message => {
  if (message.content[0] == config.prefix) {
    const command = message.content.replace(config.prefix,"");
    if (command == "help"){
      message.author.createDM().then(
        channel => {
          channel.send(config.helpMessage);
        }
      );
    }
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if(!channel||channel.type != "text" ) return;
  channel.send(config.welcomeMessage + `, ${member}`);
});

client.login(config.token);