const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'cam',
			aliases: ['camera', 'cam', 'angel', 'angle'],
			group: 'general',
			memberName: 'cam',
			description: 'Optimal angle and lighting for camera',
		});
	}
	run(message) {
        const webAPP = new MessageEmbed()
        .setColor('#5D3FD3')
        .setTitle('Camera Setup')
        .setURL(' https://www.obico.io/docs/user-guides/optimal-camera-setup/  ')
        .setThumbnail(' https://www.thespaghettidetective.com/img/camerasetups/cam19.jpg')
        .addFields(
            { name: 'Best camera postion for TSD ', value: 'https://www.obico.io/docs/user-guides/optimal-camera-setup/ ' },
        )
        .setTimestamp()
        .setFooter('Do -help for more info');
        
        return message.say(webAPP);
	}

};



/*

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'cam',
			aliases: ['camera', 'cam', 'angel', 'angle'],
			group: 'general',
			memberName: 'cam',
			description: 'Optimal angle and lighting for camera',
		});
	}
	run(message) {
		return message.say("It is preferred to have the camera on the **corner of the bed** or frame to see **2 sides** of the print and if it is on the print bed it will be more stable (when having a bedslinger). It's also best to have **even lighting** and n
		ot over **exposure** of the camera. Also make sure there is nothing in the background like a **bush**,** trees **or
		**cables **that can cause** false detection**. Try not to use** reflective backgrounds**.
		 \nHere are some examples: https://www.obico.io/docs/user-guides/optimal-camera-setup/
		  \n https://www.thespaghettidetective.com/img/camerasetups/cam19.jpg"); 
	}
}

*/

