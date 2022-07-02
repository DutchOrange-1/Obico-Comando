const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const userData = require('../../data/userData.json'); 
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



   
        return message.say(" ~ ~ )\n"+ scoreboard(message, Discord));
	}

};


async function scoreboard(message, Discord) {
  var returnData = "nothing here"; 


try{
  var keyLists = Object.keys(userData); 
 
  getTop10(keyLists); 



}catch(error){
console.error("An erro occured while setting up the leader baord:\n+ " + error); 
}
return returnData; 
}

//Get the user with the highest points
function getTopValue(keyLists){

   var max = 0
   var maxCountUser; 

for (let i = 0; i < keyLists.length; i++){ 
var temp =  userData[keyLists[i]][0]; 

if(temp > max){
maxCountUser = userData[keyLists[i]][1]; 
max = temp; 
}
}
console.log("User witht the max poitns is : " + maxCountUser + " at a toatal of " + max)

return max; 
}
//Highest points function done
//Get the top 10 points of users
function getTop10(keyLists){
var max =  getTopValue(keyLists); 
var temKeyList = keyLists; 
var orderdList = {}; 

while(i < 10){ 

console.log(orderdList.length); 
console.log("+--===-0-0=-0"); 

for(var i = 0; i < temKey.length; i++){ 
  
  if(userData[keyLists[i]][0] == max){

    console.log(keyLists);
    orderdList.push(userData[keyLists[i]]); 
    keyLists.splice(i,1);
    console.log(keyLists);
  }
  console.log("."); 

}

}
}
//Get top 10 is done. 
