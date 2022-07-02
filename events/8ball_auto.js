const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const Discord = require('discord.js')
//Defining 8 ball regex words
const ball1 = new RegExp('8 ball');
const ball2 = new RegExp('8ball');
var d = new Date();

module.exports = async msg => {
    if (msg.author.bot) return;

    const tsd = new CommandoClient({
        commandPrefix: '+',
        owner: ['822438562531377162', '621117690622378024'],
        invite: 'https://discord.gg/DfepeTKv',
    });
  
    var str = msg.content.toLowerCase();

//Testing for the 8ball
    if (ball1.test(str) === true || ball2.test(str) === true){   
    
      theBallOf8(msg); 
      console.log(d.toLocaleTimeString() + " 8 ball Was used ");
      }


  
}


function theBallOf8(message){
        const ballAwnsers = [
            "No",
            "Yes",
            "Possibly...",
            "Well... Kind of...",
            "Yes indeed",
            "DEFINATLY NOT",
            "Maybe...", 
            "I think its time you decide", 
            "Sure... if you really must be right",
            "Wait, iam texting",
            "Uncertain",
            "na",
            "yes",
            "Its your choice",
            "NO",
            "YES",
            "ZzzzzzZZZzzzzZZz",
            "As it seems, yes",
            "Certainly",
            "Ask again later",
            "My outlook = good",
            "My outlook = bad",
            "Cant predict that currently, My AI is not strong enough",
            "Give me time to think on this...",
            "My master says no",
            "My master says yes",
           // "https://images-ext-1.discordapp.net/external/4LiojxXCtYCU2XskCZYEvG1PqYaTg4xutUQXUFOq43Y/https/www.deccanherald.com/sites/dh/files/article_images/2020/05/19/iStock-1214907564-2029095503-1589425922.jpg?width=1025&height=683"
        ]; 
        const randomVal = Math.floor(Math.random() * (ballAwnsers.length)); 
            console.log("Random value for 8 ball = " + randomVal);  
        message.say(ballAwnsers[randomVal]);

}