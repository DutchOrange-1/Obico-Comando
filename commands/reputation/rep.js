const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const userData = require('../../data/userData.json'); 
const Discord = require('discord.js')
const { Client} = require('discord.js'); 




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

var userID = '444514223075360800'; 
var userAvatarURL = 'nope.nothere';

//const { displayAvatarURL } = await client.users.fetch('159985870458322944')
 // .catch(console.error);
  
 console.log("User thing is : " + client.users.cache.find(user => user.id == '203924364385583114')); 
 // console.log("\t \t \t USer FULL data is = " + client.guild.cache.user.get('159985870458322944')); 



if(message.mentions.members.first() == null){
  userID = message.author.id; 
  userAvatarURL = message.author.avatarURL(); 

}else{
  userID = message.mentions.members.first(); 
  userAvatarURL =  message.mentions.members.avatarURL(); 
}

console.log("User ID: " + userID + "\n The user avatar is also : " + userAvatarURL); 



userAvatarURL = message.author.avatarURL(); 
console.log(userAvatarURL);

var userScore =  (userData[userID])[0]
  console.log(userScore);

  if(userScore == NaN || userScore < 0 || userScore == null){
    console.log("Score not a number!"); 
    userScore = 0;  
  }


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
