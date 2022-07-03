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
  
async run(message, Discord) {
  SendEmbed(message, Discord); 

    	}

};

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
//Highest points function done - rutuns an int of the max value
//Get the top 10 points of users
function getTop10(keyLists){
var max =  getTopValue(keyLists); 
var temKeyList = keyLists; 
var orderdList = []; 

while(orderdList.length <= 9){  //One less than the requierd amount.  
//console.log("Temp key list length : " + temKeyList.length)
for(var i = 0; i < temKeyList.length; i++){ 
  if(userData[keyLists[i]][0] == max){

    orderdList.push(userData[keyLists[i]]); 
 //   console.log(max); 
 //   temKeyList.splice(i,1);
    temKeyList[i] = "000"; 
  //  console.log(temKeyList)
  }
}
max--;  
//console.log("New MAX = " +  max + "  Order List length = " + orderdList.length);
}
//console.log(orderdList);
return (orderdList); 
}
//Get top 10 is done. Returns a dictionary array of the top 10

 function getLocalFileData(){
  try{
    var keyLists = Object.keys(userData); 
    return getTop10(keyLists); 

    }catch(error){
    console.error("An error occured while setting up the leader baord:\n+ " + error); 
    return "Error in getting data."; 
    }
    return "-"
 }

function resolveAfter10Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 10000);
  });
}

async function SendEmbed(message, Discord){

  const messageSending = Promise.resolve(getLocalFileData());
  messageSending.then(value => message.say(value));


}

function createEmbed(Discord){
  
}