const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: '8ball',
			aliases: ['8', 'ball'],
			group: 'fun',
			memberName: '8ball',
			description: 'How you doing 8ball ? ',
		});
	}
	run(message) {
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
            "https://images-ext-1.discordapp.net/external/4LiojxXCtYCU2XskCZYEvG1PqYaTg4xutUQXUFOq43Y/https/www.deccanherald.com/sites/dh/files/article_images/2020/05/19/iStock-1214907564-2029095503-1589425922.jpg?width=1025&height=683"
        ]; 
        const randomVal = Math.floor(Math.random() * (ballAwnsers.length)); 
            console.log("Random value for 8 ball = " + randomVal);  
        return message.say(ballAwnsers[randomVal]);
	}

};
