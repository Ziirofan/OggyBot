//package requis
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require ("fs");
const config = require("./config/config.json");


const prefix=config.prefix;


// -------------Début des fonctions principales------------

//activation du bot
bot.on('ready', () => {
  bot.user.setStatus("online");
});

// --- Récupération des fonction events ---
fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  let eventFunction = require(`./events/${file}`);
	  let eventName = file.split(".")[0];
	 
	  bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
	});
});




//--- récupération des fonctions commands ---
bot.on('message', msg => {
	
	// récupére le nom de la commande et les arguments dans un tableau
	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();



  if((msg.content.indexOf(config.prefix) !== 0) || msg.author.bot)
    return;

	try {
		let commandFile = require(`./command/${command}.js`);
		commandFile.run(bot, msg, args);
	} catch(err) {
		console.error(err);
	}


});


// pour le log du bot
bot.login(config.token);