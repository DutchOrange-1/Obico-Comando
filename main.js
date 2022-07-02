
const thanksDetection = require('./events/thanksDetection.js');
const ball8_auto = require('./events/8ball_auto.js'); 
const spamdetect = require('./events/spamdetect.js'); 
const sql = require('./events/sql.js');
//const interactions = require('./events/interactions');

const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu,  MessageButton } = require('discord.js');
const { Collection, Client, MessageEmbed, Intents } = require('discord.js'); 

const tsd = new CommandoClient({
	commandPrefix: '+',
	owner: ['822438562531377162', '621117690622378024'],	//DutchOrange and Ryan
	invite: 'https://discord.com/invite/hsMwGpD'
});


const fs = require('node:fs');
tsd.commands = new Discord.Collection();


//Registering slash commands

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../config.json');


const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);



//Done with slash commands
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
   tsd.commands.set(command.name, command);
}
//Old Dioscrd.js commadn calling code done

tsd.registry
	.registerDefaultTypes()
	.registerGroups([
		['general', 'General commands'],
		['fun', 'Some fun commands'],
		['reputation', 'Reputation system commands'],
        ['admin', 'Administrator'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));


    tsd.once('ready', () => {
        console.log(`Logged in as ${tsd.user.tag}! (${tsd.user.id})`);
        tsd.user.setActivity('with Commando');
    });
    tsd.on('error', console.error);

	tsd.on('message', thanksDetection);
	tsd.on('message', ball8_auto);
	tsd.on('message', spamdetect);
	tsd.on('message', sql);
//	tsd.on('message', interactions);

tsd.on('test_button', () => {
console.log("Button"); 

const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

collector.on('collect', async i => {
	if (i.customId === 'primary') {
		await i.update({ content: 'A button was clicked!', components: [] });
	}else{
		console.log("Nope"); 
	}
});

collector.on('end', collected => console.log(`Collected ${collected.size} items`));

		
}); 

    tsd.login(token);  







	//Coumple of functions




	/*
client.on('clickButton', async (button) => {
  if (button.id === 'click_to_function') {
    button.channel.send(`${button.clicker.user.tag} clicked button!`);
  }
});
	*/