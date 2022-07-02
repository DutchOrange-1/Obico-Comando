const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'socials',
			aliases: ['social'],
			group: 'general',
			memberName: 'social',
			description: 'Social Media accounts of Obico',
		});
	}
	run(message) {

		const webAPP = new MessageEmbed()
        .setColor('#5D3FD3')
        .setTitle('Go follow Obico on: ')
        //.setURL('https://www.obico.io/docs/user-guides/octoprint-plugin-setup/  ')
        .setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s176-c-k-c0x00ffffff-no-rj')
        .addFields(
            { name: 'YouTube  ', value: 'https://www.youtube.com/c/Obico-io' },
			{ name: 'Reddit ', value: 'https://www.reddit.com/r/TheSpaghettiDetective/' },
			{ name: 'Instagram ', value: 'https://www.instagram.com/obico.io/' },
			{ name: 'Facebook  ', value: 'https://web.facebook.com/obico.io/?ref=br_rs&_rdc=1&_rdr' },
			{ name: 'Disocrd  ', value: 'https://discord.gg/2ntFdhaz/' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
        
        return message.say(webAPP);

      //  return message.say("YouTube: <https://youtu.be/ZpDw9mNBngU>  \nReddit: <https://www.reddit.com/r/TheSpaghettiDetective/> 
	  // \nInstagram: <https://www.instagram.com/the.spaghetti.detective/>  \nFacebook: <https://www.facebook.com/thespaghettidetective> ");
	}

};



