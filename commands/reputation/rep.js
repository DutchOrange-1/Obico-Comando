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
			memberName: 'own_reputation',
			description: 'Get own reputation score ',
		});
	}
  
async run(message, client) {
 var userID = message.author.id; 
console.log(userID);


var userAvatarURL = message.author.avatarURL(); 
console.log(userAvatarURL);

var userScore =  (userData[userID])[0]
  console.log(userScore);

  const helpRepLeaderBoard = new Discord.MessageEmbed()
  .setColor('#74EED1')
  .setTitle('__Your Reputation__')
  .setThumbnail(userAvatarURL)
  .addFields(
      { name: 'Reputation: ', value: ("**"+ userScore + "**")},
 )
  .setTimestamp()
  .setFooter('Do -help for more info');


   message.say(helpRepLeaderBoard); 

}
}
