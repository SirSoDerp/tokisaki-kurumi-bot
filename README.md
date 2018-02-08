# tokisaki-kurumi-bot
version: 0.0.1
discord bot code for tokisaki kurumi

# commands

### |help
Sends list of commands and descriptions to user's DM
```
    message.author.createDM().then(
      channel => {channel.send(config.helpMessage);
    });
```