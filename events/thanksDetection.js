const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const Discord = require('discord.js')


module.exports = async msg => {
    if (msg.author.bot) return;

    const tsd = new CommandoClient({
        commandPrefix: '+',
        owner: ['822438562531377162', '621117690622378024'],
        invite: 'https://discord.gg/DfepeTKv',
    });



const str = msg.content.toLowerCase();
var d = new Date();

var wordArray = str.split(" "); 

var words = ["thanks", "thanks!", "thanks,", "thanks."
, "thx", "thx!", "thx,","thx."
,"ty", "ty!", "ty,", "ty."
,"tysm", "tysm!", "tysm,", "tysm."
,"thank", "thank!", "thank,", "thank."
];

var posotiveDetection = 0; 
console.log(wordArray.length);
for(var j = 0; j < (wordArray.length); j++){

for(var i = 0; i < 20; i++){
 var testWord = words[i];

if(wordArray[j] == testWord){
//console.log("true")
//console.log(" " + testWord); 
posotiveDetection = 1;
}}} 

try {

tagedUser_username =   msg.mentions.members.first().user.username; 
tagedUser_usernameTAG =   msg.mentions.members.first().user.tag; 
mention_id = msg.mentions.members.first().user.id; 
taggedUser_id= msg.mentions.users.first().id; 

thanksChecker = true; 
}
catch(err){
thanksChecker = false;
}


if(posotiveDetection == 1 && thanksChecker == true && msg.author.id != taggedUser_id){//Reply and add points if someon was thnaked and add points

msg.channel.send("+1 help rep to <@" + taggedUser_id + ">"); 
//tsd.channels.cache.get('861337346191392808').send('User: **' + msg.author.tag + "** thanked **" +  tagedUser_usernameTAG + "**  ");

msg.guild.channels.resolve('861337346191392808').send?.(`User ${tagedUser_username} was thanked by ${msg.author.tag}.`).catch(console.error);

//tsd.commands.get('pointSystem').execute(msg, taggedUser_id, tagedUser_username, tsd);   //Running point system file                               //POint system
console.log(d.toLocaleTimeString() + " - USer metion ID = " + mention_id)
pointSystem(msg, mention_id, tagedUser_username); 

console.log(`User ${msg.author.tag} Thanked: ${tagedUser_username}`)


}else if(posotiveDetection == 1 && thanksChecker == false ){ //Reply if no one was mentioned

msg.reply("If you were trying to thank someone,\nPlease say \"thank you @user_you_want_to_thank\"  " + 
" so that we can properly credit them. \nHere is some more " + 
" info : <https://www.thespaghettidetective.com/blog/2021/03/24/get-involved-and-get-detective-hours/>").then(sent => { // 'sent' is that msg you just sent

let id = sent.id;
thanksmessageID = id; 
// console.log(d.toLocaleTimeString() + " - - " + id + " Someon forgot to thank at ");
});



  }
}




async function pointSystem(message, mention_id, tagedUser_username) {
  //Reads, updates and writes to userData.JSON file
var localData, oldPoints = 0; 
  const fsPromises = require('fs').promises;
  //console.log('Current directory: ' + process.cwd()); 
  const data = await fsPromises.readFile('./data/userData.json').then(data =>
    
       {
          // console.log("The data from the pointSystem() function : ");
           localData = JSON.parse(data);
         //  console.log(localData);
         console.log("Changing data"); 
      
           if(localData[mention_id] == undefined){
               console.log("Member is not registerd"); 
               
               localData[mention_id] = [0,tagedUser_username]; 
               oldPoints = 0; 
           }else{
               console.log("Changing userData"); 
              oldPoints = localData[mention_id][0]; 
              console.log(oldPoints); 
           }
          
         // console.log(localData[mention_id]); 
    
           localData[mention_id][0] = oldPoints + 1; 
       
         //  client.channels.cache.get('890884923555205150').send("Gave +1 Help Reputation to @" + tagedUser_username);
         if(localData[mention_id][0] % 5 == 0){
        sendMessage(client, localData, mention_id, '822438562531377162'); 
        sendMessage(client, localData, mention_id, '621117690622378024'); 
        sendMessage(client, localData, mention_id, '558419224402460673'); 
         }

           //Now writing data to file:
           
           require('fs').writeFile(

              './data/userData.json',
            
              JSON.stringify(localData),
            
              function (err) {
                  if (err) {
                      console.error('Error occured when writing userData.json');
                  }
              }
            );


       })
                     .catch((err) => console.error('Failed to read file', err));
                     console.log("Compleated"); 

}

function sendMessage(client, localData, mention_id, sendID){
  
      client.users.fetch(sendID, false).then((user) => {
          user.send('User : `` ' + localData[mention_id][1] + " ``  has earned 5 help rep, Requesting Detective hours with a total of **" + localData[mention_id][0] + "** points");
          
         });
  
}


