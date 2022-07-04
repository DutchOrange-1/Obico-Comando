module.exports = {
    name: 'not_watching',
    description: "Reasons for Obico not to watch the print",
    execute(message, args){
        message.channel.send("Follow this link if Obico says 'not watching':\n https://www.obico.io/docs/user-guides/webcam-feed-is-not-showing");
  
        
    }
}


const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'not_watching',
			aliases: ['not_watching', 'camera_not_working', 'cameranotworking', 'notwatching'],
			group: 'general',
			memberName: 'not_watching',
			description: 'Why is Obico not watching your print ? ',
		});
	}
	run(message) {


		const webAPP = new MessageEmbed()
        .setColor('#74EED1')
        .setTitle('Obico not watching')
        .setURL('https://www.obico.io/docs/user-guides/webcam-feed-is-not-showing ')
        .setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s900-c-k-c0x00ffffff-no-rj')
        .addFields(
            { name: 'Is Obico not watching your print? ', value: 'https://www.obico.io/docs/user-guides/webcam-feed-is-not-showing' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
        
        return message.say(webAPP);

          return message.say("Follow this link if Obico says 'not watching':\n https://www.obico.io/docs/user-guides/webcam-feed-is-not-showing");
	}

};


