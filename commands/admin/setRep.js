
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')

const {
    Client,
    Intents
} = require('discord.js');


module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'setrep',
			aliases: ['setrep'],
			group: 'admin',
			memberName: 'setrep',
			description: 'Set a reputation value for a user',
		});
	}
	run(message) {

        if(message.member.roles.cache.find(r => r.name === "Team Members")) {
            try{
              
              taggedUser_id =   message.mentions.members.first().user.id; 
              tagedUser_username =   message.mentions.members.first().user.username;
              
        var allContent = message.content.split(" "); 
        var amount = allContent[allContent.length-1]; 
            }catch(e){console.log(e)}};

        var tagedUser_username, tagedUser_usernameTAG, mention_id, taggedUser_id; 
        try{
            tagedUser_username =   message.mentions.members.first().user.username; 
            tagedUser_usernameTAG =   message.mentions.members.first().user.tag; 
            mention_id = message.mentions.members.first().user.id; 
            taggedUser_id= message.mentions.users.first().id; 

        }catch(e){
            console.error("Unable to get user data \n" + e); 
           
        }


        takerep(message, taggedUser_id, tagedUser_username, Client, amount); 

        async function takerep(message, mention_id, tagedUser_username, client, amount) {
            console.log("Taking reputation"); 
            //Reads, updates and writes to userData.JSON file
        var localData, oldPoints = 0; 
            const fsPromises = require('fs').promises;
            const data = await fsPromises.readFile('./data/userData.json').then(data =>
                 {
                     console.log("The data from the setRep() function : ");
                     localData = JSON.parse(data);
                     console.log(localData);
                
                     if(localData[mention_id] == undefined){
                         console.log("Member is not registerd"); 
                         
                         localData[mention_id] = [0,tagedUser_username]; 
                         oldPoints = 0; 
                     }else{
                         console.log("Changing userData"); 
                        oldPoints = localData[mention_id][0]; 
                        console.log(oldPoints); 
                     }
                    
               
                     localData[mention_id][0] = amount; 
                 
                     require('fs').writeFile(
        
                        './data/userData.json',
                      
                        JSON.stringify(localData),
                      
                        function (err) {
                            if (err) {
                                console.error('Error occured when writing userData.json');
                            }
                        }
                      );
                     
                      message.guild.channels.resolve('861337346191392808').send?.("Set rep of " + tagedUser_username + " to " + amount );
        
                 })
                               .catch((err) => console.error('Failed to read file', err));
                               console.log("Compleated"); 
          }
    }
}
/*
module.exports = {
    name: 'setrep',
    description: "setrep",
    execute(message, args, taggedUser_id, tagedUser_username, client, amount){

    takerep(message, taggedUser_id, tagedUser_username, client, amount); 

        async function takerep(message, mention_id, tagedUser_username, client, amount) {
            //Reads, updates and writes to userData.JSON file
        var localData, oldPoints = 0; 
            const fsPromises = require('fs').promises;
            const data = await fsPromises.readFile('./userData.json').then(data =>
                 {
                     console.log("The data from the setRep() function : ");
                     localData = JSON.parse(data);
                     console.log(localData);
                
                     if(localData[mention_id] == undefined){
                         console.log("Member is not registerd"); 
                         
                         localData[mention_id] = [0,tagedUser_username]; 
                         oldPoints = 0; 
                     }else{
                         console.log("Changing userData"); 
                        oldPoints = localData[mention_id][0]; 
                        console.log(oldPoints); 
                     }
                    
               
                     localData[mention_id][0] = amount; 
                 
                     require('fs').writeFile(
        
                        './userData.json',
                      
                        JSON.stringify(localData),
                      
                        function (err) {
                            if (err) {
                                console.error('Error occured when writing userData.json');
                            }
                        }
                      );
                     
                      client.channels.cache.get('861337346191392808').send("Set rep of " + tagedUser_username + " to " + amount );
        
                 })
                               .catch((err) => console.error('Failed to read file', err));
                               console.log("Compleated"); 
        
          }
       
         
            
          
    }
}
*/ 