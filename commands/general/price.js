module.exports = {
    name: 'price',
    description: "Prices of Obico",
    execute(message, args){
        message.channel.send("Follow this link to see Obico's pricing: \n https://app.thespaghettidetective.com/ent/pricing/");
    }
}


const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'pricing',
			aliases: ['price' , 'pricing'],
			group: 'general',
			memberName: 'pricing',
			description: 'The pricing of Obico',
		});
	}
	run(message) {

		const webAPP = new MessageEmbed()
        .setColor('#5D3FD3')
        .setTitle('Obico costs and pricing')
        .setURL('https://app.thespaghettidetective.com/ent/pricing/  ')
        .setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s176-c-k-c0x00ffffff-no-rj')
        .addFields(
            { name: 'How much is premium ? ', value: 'https://app.thespaghettidetective.com/ent/pricing/' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
        
        return message.say(webAPP);

          //  return message.say("Follow this link to see Obico's pricing: \n https://app.thespaghettidetective.com/ent/pricing/");
	}

};



