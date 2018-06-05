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
	if (message.content.startsWith(prefix + 'Mimikkip')) {
	
		 message.channel.send(`Mimikkip`);
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
	if (message.content.startsWith(prefix + '5star')) {
	
		 message.channel.send(`"I'd like to offer my thanks today. It's for all the times you've helped me. Nothing more, nothing less.
But while I'm at it, I should also thank you for giving me courage and never failing to be kind.
Those are rarer qualities than you'd think. In fact...
I think you're as precious to me as the breeze that blows across the open plains of Sacae.
Oh my! Pay me no mind. But, please, know that I'm always here for you, all right?"`);
	}
});

//Random message answers
var randomfacts = [
 "Example 1",
  "Example 2",
  "Example 3",	
  "Example 4",
]
//Random message code
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'random')) {
		var randomfactAnswer = randomfacts[Math.floor(Math.random() * randomfacts.length)];
		message.channel.send(randomfactAnswer);
		}
});

var castlequote = [
 "I love the feel of the wind. It's always a balm for whatever's bothering me.",
 "Wielding a sword is useful for more than battle. I find that it also gives me a peek into another person's thoughts. So, I think I might know what's on your mind, friend!",
 "Good job out there. You be sure to stay well rested. You carry the heaviest load of all of us.",	
 "We should find a hill and look out across the world. People really don't do that nearly enough.",
"I may look calm—maybe even still. But I'm really very focused. It's part of my daily training with my sword.",
]

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'castle')) {
		var castleAnswer = castlequote[Math.floor(Math.random() * castlequote.length)];
		message.channel.send(castleAnswer);
		}
});

//Important
client.login(process.env.BOT_TOKEN);

