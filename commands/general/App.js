const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'app',
			aliases: ['app'],
			group: 'general',
			memberName: 'app',
			description: 'How to use Obico App',
		});
	}
	run(message) {
        const webAPP = new MessageEmbed()
        .setColor('#74EED1')
        .setTitle('How to set up Obico')
	.setThumbnail('https://www.thespaghettidetective.com/img/logo_square.png')
        .addFields(
            { name: 'How to setup Obico with cloud server: ', value: 'https://www.obico.io/docs/user-guides/octoprint-plugin-setup/' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
        
        return message.say(webAPP);
	}

};

