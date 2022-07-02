const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'git',
			aliases: ['github', 'gitgub'],
			group: 'general',
			memberName: ' ',
			description: 'Obico GitHub',
		});
	}
	run(message) {
        return message.say("Here is Obicos's GitHub: \n https://github.com/TheSpaghettiDetective  :obico:");
	}

};


