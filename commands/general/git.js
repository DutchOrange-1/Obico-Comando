const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'git',
			aliases: ['github'],
			group: 'general',
			memberName: ' ',
			description: 'Obico GitHub',
		});
	}
	run(message) {
	const webAPP = new MessageEmbed()
        .setColor('#74EED1')
        .setTitle('Github')
        .setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s900-c-k-c0x00ffffff-no-rj')
        .addFields(
            { name: 'Here is Obico\'s Github page: ', value: 'https://github.com/TheSpaghettiDetective' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
        //return message.say("Here is Obicos's GitHub: \n https://github.com/TheSpaghettiDetective  :obico:");
		return message.say(webAPP); 
	}
	

};


