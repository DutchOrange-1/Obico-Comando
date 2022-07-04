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

			const gitHub = new MessageEmbed()
			.setColor('#00FFFF')
			.setTitle('Laggy camera')
			.setURL('https://github.com/TheSpaghettiDetective ')
			.setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s900-c-k-c0x00ffffff-no-rj')
			.addFields(
				{ name: 'Obicos` GitHib ?  ', value: 'https://github.com/TheSpaghettiDetective ' },
			)
			.setTimestamp()
			.setFooter('Do -help for more info');
			
			return message.say(gitHub);
		}
};


