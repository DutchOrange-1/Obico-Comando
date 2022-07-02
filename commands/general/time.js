const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'time',
			aliases: ['t'],
			group: 'general',
			memberName: 'time',
			description: 'Replies with the time',
		});
	}
	run(message) {
		var d = new Date();
		console.log("Getting time stamp"); 
		return message.say('Time = ' +  (d.toLocaleTimeString()).slice(0,-3) );
	}

};

