const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'mobileapp',
			aliases: ['mobileapp'],
			group: 'general',
			memberName: ' mobileapp',
			description: 'The mobile app of TSD',
		});
	}
	run(message) {
		const webAPP = new MessageEmbed()
        .setColor('#74EED1')
        .setTitle('Mobile App')
        .setURL('https://play.google.com/store/apps/details?id=com.thespaghettidetective.android&hl=en&gl=US/')
        .setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s900-c-k-c0x00ffffff-no-rj')
        .addFields(
            { name: 'Mobile App supported by iPhone and Android ', value: 'https://play.google.com/store/apps/details?id=com.thespaghettidetective.android&hl=en&gl=US/' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
        
        return message.say(webAPP);

       // return message.say("Here is how to set up TSD usign the Mobile App \n https://play.google.com/store/apps/details?id=com.thespaghettidetective.android&hl=en&gl=US");
	}

};


