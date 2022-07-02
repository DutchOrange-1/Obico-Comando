const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'lag',
			aliases: ['laggy', 'laggycamera', 'laggycam'],
			group: 'general',
			memberName: 'lag',
			description: 'Is your camera lagging ot very slow ? ',
		});
	}
	run(message) {
			const webAPP = new MessageEmbed()
			.setColor('#5D3FD3')
			.setTitle('Laggy camera')
			.setURL('https://www.obico.io/docs/user-guides/webcam-feed-is-laggy/ ')
			.setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s900-c-k-c0x00ffffff-no-rj')
			.addFields(
				{ name: 'Camera being laggy ?  ', value: 'https://www.obico.io/docs/user-guides/webcam-feed-is-laggy/ ' },
			)
			.setTimestamp()
			.setFooter('Do -help for more info');
			
			return message.say(webAPP);
		}

       // return message.say("Follow this link if your camera is laggy or having problems: \n  https://www.obico.io/docs/user-guides/webcam-feed-is-laggy/");
};

