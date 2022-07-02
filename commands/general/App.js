const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'app',
			aliases: ['app'],
			group: 'general',
			memberName: 'app',
			description: 'How to use TSD App',
		});
	}
	run(message) {
        const webAPP = new MessageEmbed()
        .setColor('#5D3FD3')
        .setTitle('How to set up TSD')
        .setURL('https://www.obico.io/docs/user-guides/octoprint-plugin-setup/  ')
        .setThumbnail('https://www.thespaghettidetective.com/img/logo_square.png')
        .addFields(
            { name: 'How to set up TSD on octoprint using TSD servers by following: ', value: 'https://www.obico.io/docs/user-guides/octoprint-plugin-setup/' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
        
        return message.say(webAPP);
	}

};

