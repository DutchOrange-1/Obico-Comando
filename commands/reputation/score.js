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
console.error("An error occured while setting up the leader baord:\n+ " + error); 
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
var orderdList = []; 


var count = 0; 
while(orderdList.length <= 9){ 

for(var i = 0; i < temKeyList.length; i++){ 
  
  if(userData[keyLists[i]][0] == max){

    console.log(keyLists.length);
    orderdList.push(userData[keyLists[i]]); 
    keyLists.splice(i,1);
    console.log(keyLists.length);
  }
}
//console.log(orderdList);
count++;
max--;  
console.log("New MAX = " +  max + "\nOrder List length = " + orderdList.length);
}
console.log(orderdList);
}
//Get top 10 is done. 
