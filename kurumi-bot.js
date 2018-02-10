const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const secret = require("./secret.json");

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
    const command = message.content.replace(config.prefix,"").split(" ")[0];

    // help command
    // sends a string configurable in the config to the user's DM
    if (command == "help"){
      message.author.createDM().then(
        channel => {
          channel.send(config.helpMessage)
            .catch(console.error);
        },
        errorMsg => {
          console.log(errorMsg + "user: " + message.author);
        }
      );
    }

    // clear command
    // removes all messages in a channel
    // requires the user to have administrator in order to run
    if (command == "clear"){
      if (!message.guild.members.get(message.author.id).permissions.has("ADMINISTRATOR")) return;
      message.channel.fetchMessages()
        .then(
          messages => {
            messages.every(
              (msg) => {msg.delete().catch(console.error); return true;}
            );
            console.log("messages removed");
          }
        )
        .catch(console.error);
    }

  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  channel.send(config.welcomeMessage + `, ${member}`)
    .catch(console.error);
});

client.login(secret.token);