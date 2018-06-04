const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "Fire Emblem Heroes", type: 0}});
});

var prefix = "l."

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	
		 message.channel.send(`
**l.help**
**l.prefix**
**l.summon**
**l.castle**

`);
	}
});
//Copy and paste from here to add a command, replace mimikkip with ur command and here goes ur reply to wut bot is going to say
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'prefix')) {
	
		 message.channel.send(`The current prefix is l. (last updated 04/06/2018)`);
	}
});

//Important
client.login(process.env.BOT_TOKEN);

