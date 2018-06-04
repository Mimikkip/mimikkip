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
"Orders?"
**l.help**
**l.prefix**
**l.summon**
**l.castle**
**l.5star**

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

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'summon')) {
	
		 message.channel.send(`"I'm Lyndis of the House of Caelin. Yet I truly belong to the open plains. Just call me Lyn, all right?"`);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'castle')) {
	
		 message.channel.send(`"I love the feel of the wind. It's always a balm for whatever's bothering me."`);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + '5star')) {
	
		 message.channel.send(`"I'd like to offer my thanks today. It's for all the times you've helped me. Nothing more, nothing less.
But while I'm at it, I should also thank you for giving me courage and never failing to be kind.
Those are rarer qualities than you'd think. In fact...
I think you're as precious to me as the breeze that blows across the open plains of Sacae.
Oh my! Pay me no mind. But, please, know that I'm always here for you, all right?"`);
	}
});

//Important
client.login(process.env.BOT_TOKEN);

