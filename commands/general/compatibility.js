module.exports = {
    name: 'compatibility',
    description: "compatibility_mode",
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

		const comp = new MessageEmbed()
        .setColor('#74EED1')
        .setTitle('Compatibility Mode')
        .setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s900-c-k-c0x00ffffff-no-rj')
        .addFields(
            { name: 'How to enable compatibility mode: ', value: 'https://www.obico.io/docs/user-guides/streaming-compatibility-mode/#:~:text=Compatibility%20mode.&text=It%20is%20efficient%20in%20CPU,in%20the%20advanced%20mode%20first.' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
		return message.say(comp); 
	}

};


