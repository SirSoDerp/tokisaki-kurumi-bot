# tokisaki-kurumi-bot
version: 0.0.1 <br/>
discord bot code for tokisaki kurumi <br/>
feel free to use this source code as inspiration, as a base for your own bot, or even run your bot with this.

# commands

### |help
Sends list of commands and descriptions to user's DM
```javascript
  // creates a DM channel then sends the information
  message.author.createDM().then(
    channel => {
      channel.send(config.helpMessage)
        .catch(console.error);
    },
    errorMsg => {
      console.log(errorMsg + "user: " + message.author);
    }
  );
```

### |clear
Deletes every message in the channel where the command was issued (must be administrator)
```javascript
  // returns if user is not administrator
  if (!message.guild.members.get(message.author.id).permissions.has("ADMINISTRATOR")) return;
  // fetches all the messages, then deletes them
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
```