const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: '  ',
			aliases: [' '],
			group: 'general',
			memberName: ' ',
			description: ' ',
		});
	}
	run(message) {
      



        return message.say(webAPP);
	}

};

