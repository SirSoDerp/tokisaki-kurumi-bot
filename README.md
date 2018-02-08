# tokisaki-kurumi-bot
version: 0.0.1 \n
discord bot code for tokisaki kurumi \n
feel free to use this source code as inspiration, as a base for your own bot, or even run your bot with this.

# commands

### |help
Sends list of commands and descriptions to user's DM
```javascript
    message.author.createDM().then(
      channel => {channel.send(config.helpMessage);
    });
```