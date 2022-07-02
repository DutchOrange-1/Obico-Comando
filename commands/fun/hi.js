const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

const Discord = require("discord.js");
const disbut = require("discord-buttons");
const menupages = require("discord-embed-pages-selection");

const client = new Discord.Client();
disbut(client);

module.exports = class AppCommand extends Command {
    
	constructor(client) {
		super(client, {
			name: 'hi',
			aliases: ['hi', 'hey'],
			group: 'fun',
			memberName: 'hi',
			description: 'Hello ', 
		});   
	}
run(message) {


       if(message.content == "selectionEmbed" || message.content == "+hi"){
            const embed = new Discord.MessageEmbed()
            .setColor("YELLOW")
            .setTitle("PAGE 1")
            
            const embed2 = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("PAGE 2")
            
            menupages.pageSelect(message,[
          {
            "name": "PAGE 1",
            "description": "PAGE 1",
            "emoji": {
              "name": "🧀",
              "animated": false
            }
          },
          {
            "name": "PAGE 2",
            "description": "PAGE 2",
            "emoji": {
              "name": "😳",
              "animated": false
            }
          }
        ],[embed, embed2], {
          timeout: 60*1000,
          placeholder: "CLICK TO SELECT PAGE",
          ephemeral: "YOU DO NOT OWN THIS EMBED",
          message: "USE THE SELECTION PAGE BELOW TO CHANGE PAGE",
          extraRows: [],
          extraPos: "below"
        })
         }

     //  message.say(embed);
     //   message.say(embed2);
        
    //    return message.say("Hello !");
	}

};

