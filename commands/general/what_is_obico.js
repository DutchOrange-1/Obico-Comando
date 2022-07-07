const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'obico',
			aliases: ['what_is_obico'],
			group: 'general',
			memberName: 'obico',
			description: 'What is Obico ? ',
		});
	}
	run(message) {

		const webAPP = new MessageEmbed()
        .setColor('#74EED1')
        .setTitle('What is Obico ?')
       // .setURL('https://www.obico.io/docs/user-guides/octoprint-plugin-setup/  ')
        .setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s176-c-k-c0x00ffffff-no-rj')
        .addFields(
            { name: 'Here is a post by **Fabbaloo** explaing what Obico is:  ', value: 'https://www.fabbaloo.com/blog/2020/6/8/what-is-the-spaghetti-detective-and-do-i-need-one-probably' },
			{ name: 'Or this one by **3D print**:   ', value: 'https://3dprint.com/265545/spaghetti-detective-open-source-ai-software-detects-prints-gone-wrong/' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
        
        return message.say(webAPP);


        return message.say("Here is a post by **Fabbaloo** explaing what Obico is. :detective: \n https://www.fabbaloo.com/blog/2020/6/8/what-is-the-spaghetti-detective-and-do-i-need-one-probably \n Or this one by **3D print**. :detective: \n https://3dprint.com/265545/spaghetti-detective-open-source-ai-software-detects-prints-gone-wrong/");
	}

};


