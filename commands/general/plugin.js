const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'plugin_setup',
			aliases: ['plugin', 'octoprint', 'moonraker'],
			group: 'general',
			memberName: 'plugin_setup',
			description: 'Obico plugins for Octoprint and Moonraker',
		});
	}
	run(message) {

		const webAPP = new MessageEmbed()
        .setColor('#5D3FD3')
        .setTitle('Plugin Setup')
        //.setURL('https://www.obico.io/docs/user-guides/octoprint-plugin-setup/  ')
        .setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s900-c-k-c0x00ffffff-no-rj')
        .addFields(
            { name: 'Octoprint: ', value: 'https://www.obico.io/docs/user-guides/octoprint-plugin-setup/ ' },
			{ name: 'Moonraker: ', value: 'https://www.obico.io/docs/user-guides/klipper-setup/ ' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
        
        return message.say(webAPP);


       // return message.say("Here is Obico's OctoPrint page: \n https://plugins.octoprint.org/plugins/thespaghettidetective/");
	}

};



