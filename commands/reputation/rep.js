const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const userData = require('../../data/userData.json'); 
const Discord = require('discord.js')


module.exports = class AppCommand extends Command {
  
	constructor(client) {
		super(client, {
			name: 'reputation',
			aliases: ['rep', 'r'],
			group: 'reputation',
			memberName: 'ownReputation',
			description: 'Get own reputation score ',
		});
	}
  
async run(message, Discord, client) {
 var userID = message.author.ID; 
console.log(userID);


message.author.user.avatarURL()
  .then(user => {
    user.avatarURL() 

  }).then(topUserURL => {
      console.log(topUserURL); 
}); 

const helpRepLeaderBoard = new Discord.MessageEmbed()
        .setColor('#74EED1')
        .setTitle('Yor Reputation')
        .setThumbnail(topUserURL)
        .addFields(
            { name: 'Reputation: ', value: "~" },
       )
        .setTimestamp()
        .setFooter('Do -help for more info');
      
      
         message.say(helpRepLeaderBoard); 
  
<<<<<<< Updated upstream
         
=======
>>>>>>> Stashed changes

}
}

