const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

const Discord = require('discord.js')

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'scoarboard',
			aliases: ['score', 'score1'],
			group: 'reputation',
			memberName: 'scoring',
			description: 'Reputation score system - Beta - ',
		});
	}
	run(message) {



   
        return message.say(":)\n"+ scoreboard(message, Discord));
	}

};


async function scoreboard(message, Discord) {
try{

    var localData; 
    const fsPromises = require('fs').promises;
    const data = await fsPromises.readFile('./data/thanksData.txt', 'utf-8').then(data =>
         {
          /*
             //message.channel.send("Changing data... on ID : " + mention_id); 
             console.log("The data from the pointSystem() function : ");
             localData = JSON.parse(data);
          console.log(localData);
        */
       console.log(data); 
var disct = []
disct = data.split("\n"); 
console.log(disct); 



var array = [
  {name: "John", age: 34},
  {name: "Peter", age: 54},
  {name: "Jake", age: 25}
];

//console.log(array);
/*
console.log(
  array.sort(function(a, b) {
    return   b.age -a.age;
  })); 
*/ 

  var finallString = "Position | Points | UserTag\n"; 
//console.log(Object(localData));

const helpRepLeaderBoard = new Discord.MessageEmbed()
    .setColor('#800080')
    .setTitle('__Reputation Leaderboard__')
    .setThumbnail('https://www.thespaghettidetective.com/img/logo_square.png')
    .setFooter("This is the top 10 members")
   // .addField('Scores: ', ("```" + finallString + "```"), true)

    .addFields(
        { name: 'Scores', value: ("```" + finallString + "```") },
        { name: 'To see other score lists do: ', value: '-scores2 or -scores3 ' }
    )
    
    .setTimestamp()
 //  message.channel.send({ embeds: [helpRepLeaderBoard] });
    return { embeds: [helpRepLeaderBoard] }; 

  }); 
  } 
catch (e){
    console.error("Error in reading file for score board \n" + e.message); 
}
}



