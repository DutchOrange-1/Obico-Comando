
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
			name: 'takerep',
			aliases: ['removerep', 'minusrep', 'take'],
			group: 'admin',
			memberName: 'takerep',
			description: 'removes one rep from a user',
            clientPermissions: ['ADMINISTRATOR', 'BAN_MEMBERS']
		});
	}
	run(message) {
        var tagedUser_username, tagedUser_usernameTAG, mention_id, taggedUser_id; 
        try{
            tagedUser_username =   message.mentions.members.first().user.username; 
            tagedUser_usernameTAG =   message.mentions.members.first().user.tag; 
            mention_id = message.mentions.members.first().user.id; 
            taggedUser_id= message.mentions.users.first().id; 

        }catch(e){
            console.error("Unable to get user data \n" + e); 
           
        }
      
        takerep(message, taggedUser_id, tagedUser_username, Client, Discord); 

        async function takerep(message, mention_id, tagedUser_username, client, Disocrd) {
            //Reads, updates and writes to userData.JSON file
        var localData, oldPoints = 0; 
            const fsPromises = require('fs').promises;
            const data = await fsPromises.readFile('./data/userData.json').then(data =>
                 {
                     console.log("The data from the takeRep() function : ");
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
                    
               
                     localData[mention_id][0] = oldPoints - 1; 
                 
                     message.delete(); 
                     try{
                      const replyEmbed = new MessageEmbed()
                      .setColor('#74EED1')
                      .setTitle('Rep removed from __' + tagedUser_username + "__")
                      .setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s176-c-k-c0x00ffffff-no-rj')
                      .addFields(
                        { name: 'Rep removed by: ' + message.author.username + ' ' , value: 'Rep is now ' + (oldPoints-1) }
                      ) 
                      .setTimestamp()
                      .setFooter('See your score with -rep');
            
                      message.say(replyEmbed);
                    }catch(err){
                        console.log("error ocurded in second embed \n " +  err); 
                    }
                    
                     require('fs').writeFile(
        
                        './data/userData.json',
                      
                        JSON.stringify(localData),
                      
                        function (err) {
                            if (err) {
                                console.error('Error occured when writing userData.json');
                            }
                        }
                      );
                     
                      
try{
                      const anEmbed = new MessageEmbed()
                      .setColor('#74EED1')
                      .setTitle('Removed rep from __' + tagedUser_username + "__")
                      .setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s176-c-k-c0x00ffffff-no-rj')
                      .addFields(
                          { name: 'User ID rep was removed from: ' , value: mention_id },
                          { name: 'Removed by : ' , value: message.author.tag  },
                          { name: 'Removed by ID: ', value: message.author.id  },
                          { name: 'Removed In channel tag: ' , value: message.channel.name },
                          { name: 'Removed In channel ID: ' , value: message.channel.id },
                          { name: 'New Help rep: ' , value: ':' + (oldPoints-1) },
                     )
                      .setTimestamp()

                     // client.channels.cache.get('861337346191392808').send(anEmbed );
                     message.guild.channels.resolve('861337346191392808').send?.(anEmbed); 
                      
                      }catch(err){
console.log("error ocurded in first embed \n " + err); 
                      }
                      
        
                 })
                               .catch((err) => 
                               console.error('Failed to read file', err),
                             //  message.say("<@822438562531377162>\nError occured while reading file.")
                               );

                               console.log("Compleated"); 
        
          }
	}
};



/*


module.exports = {
    name: 'removeRep',
    description: "removeRep",
    execute(message, args, taggedUser_id, tagedUser_username, client, Disocrd){

    takerep(message, taggedUser_id, tagedUser_username, client, Disocrd); 

        async function takerep(message, mention_id, tagedUser_username, client) {
            //Reads, updates and writes to userData.JSON file
        var localData, oldPoints = 0; 
            const fsPromises = require('fs').promises;
            const data = await fsPromises.readFile('./userData.json').then(data =>
                 {
                     console.log("The data from the takeRep() function : ");
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
                    
               
                     localData[mention_id][0] = oldPoints - 1; 
                 
                     message.delete(); 
                     try{
                      const replyEmbed = new Disocrd.MessageEmbed()
                      .setColor('#5D3FD3')
                      .setTitle('Rep removed from __' + tagedUser_username + "__")
                      .setThumbnail('https://www.thespaghettidetective.com/img/logo_square.png')
                      .addFields(
                        { name: 'Rep removed by: ' + message.author.username + ' ' , value: 'rep is now = ' + (oldPoints-1) }
                      ) 
                      .setTimestamp()
                      .setFooter('see your score with -rep');
            
                      message.channel.send({ embeds: [ replyEmbed] });
                    }catch(err){
                        console.log("error ocurded in second embed \n " +  err); 
                    }
                    
                     require('fs').writeFile(
        
                        './userData.json',
                      
                        JSON.stringify(localData),
                      
                        function (err) {
                            if (err) {
                                console.error('Error occured when writing userData.json');
                            }
                        }
                      );
                     
                      
try{
                      const anEmbed = new Disocrd.MessageEmbed()
                      .setColor('#5D3FD3')
                      .setTitle('Removed rep from __' + tagedUser_username + "__")
                      .setThumbnail('https://www.thespaghettidetective.com/img/logo_square.png')
                      .addFields(
                          { name: 'User ID rep was removed from: ' , value: mention_id },
                          { name: 'Removed by : ' , value: message.author.tag  },
                          { name: 'Removed by ID: ', value: message.author.id  },
                          { name: 'Removed In channel tag: ' , value: message.channel.name },
                          { name: 'Removed In channel ID: ' , value: message.channel.id },
                          { name: 'New Help rep:  ' , value: ':' + (oldPoints-1) },
                     )
                      .setTimestamp()

                     // client.channels.cache.get('861337346191392808').send("Removed **1** rep from " + tagedUser_username );
                      client.channels.cache.get('861337346191392808').send({ embeds: [anEmbed] } );
                      }catch(err){
console.log("error ocurded in first embed \n " + err); 
                      }
                      
        
                 })
                               .catch((err) => console.error('Failed to read file', err));
                               console.log("Compleated"); 
        
          }
       
            
          
    }
}


*/
