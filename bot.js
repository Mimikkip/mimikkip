const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "", type: 0}});
});

var prefix = "m."

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	
		 message.channel.send(`
**m.help**
**m.ping** 
**m.hello**
**m.xd**
**m.mimikkip**
**m.channel**
**m.pol**
**m.TSG**
**m.tetsuo**
**m.alex**

`);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'hello')) {
	
		 message.channel.send(`Hello ${message.author.username}! :wave:`);
		
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'xd')) {
	
		 message.channel.send(`XD`);
	}
});
//Copy and paste from here to add a command, replace mimikkip with ur command and here goes ur reply to wut bot is going to say
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'mimikkip')) {
	
		 message.channel.send(`Now trying to contact <@285845218639740929> ... Please wait`);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'channel')) {
	
		 message.channel.send(`https://www.youtube.com/channel/UCCxNC6gwdCUivWQhkmSSh1A?view_as=subscriber`);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'pol')) {
	
		 message.channel.send(`Hello my life is sad! :wave:`);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'TSG')) {
	
		 message.channel.send(`konichiwa orewa TSC. or the lone element`);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'tetsuo')) {
	
		 message.channel.send(`Ohayo, Tetsuo-kun!`);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'alex')) {
	
		 message.channel.send(`No homo`);
	}
});

//Important
client.login(process.env.BOT_TOKEN);

