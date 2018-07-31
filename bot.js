const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	//Playing game message (put message inside "")
	   client.user.setPresence({game: {name: "Fire Emblem Heroes", type: 0}});
});

//Prefix
var prefix = "l."

//Example message
client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'yourcomand')) {

        const embed = new Discord.RichEmbed()
  .setTitle("Your Title")
  .setAuthor("Your Authorr", "Author Icon Imge link")
  .setColor(0x7401DF)
  .setDescription("Ur Description")
 .setImage("UrImage")

  message.channel.send({embed});
    }
});

//Lyn
client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'Test')) {

        const embed = new Discord.RichEmbed()
  .setTitle("Lyn")
  .setAuthor("Mimikkip")
  .setColor(0x7401DF)
  .setDescription("This is a Lyn")
 .setImage("https://fireemblem.gamepress.gg/sites/fireemblem/files/styles/300h/public/2017-01/Lyn.png?itok=bHnVdWJv")

  message.channel.send({embed});
    }
});

//Important
client.login(process.env.BOT_TOKEN);

