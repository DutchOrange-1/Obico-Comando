module.exports = {
    name: 'compatibility',
    description: "compatibility mode",
    execute(message, args){
        message.channel.send("Follow this link to enable compatibility mode:\n"
        + "https://www.obico.io/docs/user-guides/streaming-compatibility-mode/#:~:text=Compatibility%20mode.&text=It%20is%20efficient%20in%20CPU,in%20the%20advanced%20mode%20first.");
    }
}

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'compatibility',
			aliases: ['compat'],
			group: 'general',
			memberName: 'compatibility',
			description: 'What is and how to enable compatibility mode',
		});
	}
	run(message) {
              return message.say("Follow this link to enable compatibility mode:\n"
        + "https://www.obico.io/docs/user-guides/streaming-compatibility-mode/#:~:text=Compatibility%20mode.&text=It%20is%20efficient%20in%20CPU,in%20the%20advanced%20mode%20first.");
	}

};


