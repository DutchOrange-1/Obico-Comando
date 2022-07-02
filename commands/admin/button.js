
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')

const {
    Client,
    Intents
} = require('discord.js');

//Extra
//const discord = require('discord.js'); // Define the discord.js module
const client = new Discord.Client(); // Create a discord.js client (constructor)
const disbut = require('discord-buttons');

//================================================================

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'button',
			aliases: ['button', 'but'],
			group: 'admin',
			memberName: 'button',
			description: 'Press it',
		});
	}
	run(message) {

        if (message.author.bot) return;
        
          let embed = new Discord.MessageEmbed()
            .setTitle(`Hello ${message.author.username}!`)
            .setDescription("Prefix for this bot is `+`")
    

            let button = new disbut.MessageButton()
  .setStyle('red') //default: blurple
  .setLabel('This is a big button') //default: NO_LABEL_PROVIDED
  .setID('test_button') //note: if you use the style "url" you must provide url using .setURL('https://example.com')
  .setDisabled(false); //disables the button | default: false

         
            message.channel.send(embed).then(m => {
                m.channel.send(button)
               
            }); 

           
    }
}


/*
//Note that you need the Node module installed!
let button = new disbut.MessageButton()
  .setStyle('red') //default: blurple
  .setLabel('My First Button!') //default: NO_LABEL_PROVIDED
  .setID('test_buttonn') //note: if you use the style "url" you must provide url using .setURL('https://example.com')
  .setDisabled(); //disables the button | default: false

message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);

*/



/*
     if (message.author.bot) return;
        
          let embed = new Discord.MessageEmbed()
            .setTitle(`Hello ${message.author.username}!`)
            .setDescription("Prefix for this server is `?b`")
            .setColor("ORANGE")
            .addField("🛠️ | Utlity", "`help` `whoareyou` `ping` `offserver` `updates` `timer` `ticket`")
            .addField("🛡️ | Moderation", "`bgevents` `clear` `mute` `warn` `unmute` `serverinfo` `info` `ban` `userinfo` `slowmode` `poll` `eval` `membercount` `create-channel` `delete-channel` `lock` `unlock` `unban` `giverole` `removerole`")
            .addField("📸 | Image Genration", "`cmm` `slap` `meme`")
            .addField(":smile: Fun", "`avatar` `kill` `thanks` `nitro` `hug` `chatbot` `8ball` `noobrate` `dice` `nuke` `jumble` `weather` `rps` `search`")
            .setTimestamp()
            .setFooter(`GREETINGS ${message.author.username}:D`)
            let but = new disbut.MessageButton()
            .setStyle('url')
            .setLabel('Invite me!')
            .setURL('https://dsc.gg/blab')
            let but1 = new disbut.MessageButton()
            .setStyle('url')
            .setLabel('Vote me on Top.gg!')
            .setURL('https://top.gg/bot/885379319122264075')
         
            message.channel.send(embed).then(m => {
                m.channel.send(but)
                m.channel.send(but1)
            })

*/