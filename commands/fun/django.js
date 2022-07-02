
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

var fs = require("fs");
const fsPromises = require('fs').promises;

const { read } = require('fs');
const { table } = require('console');

module.exports = class AppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'django',
			aliases: ['django', 'dj'],
			group: 'fun',
			memberName: 'django',
			description: 'How often is it a django problem?',
		});
	}

	
	run(message) {
		changeData(message);
     // return message.say("Current Django fails = " + data );
	}

};
	

//Function theat holds all the read and write functions
async function changeData(message){
var localData; 
	const data = await fsPromises.readFile('./data/django.json').then(data =>
		{
		  
		  localData = JSON.parse(data);
		  console.log("Changing data, data is = " + localData);
		  localData = parseInt(localData); 
		  localData++;
		console.log("Date is now " + localData);  
			//Now writing data to file: 
			require('fs').writeFile(

			   './data/django.json',
			 
			   JSON.stringify(localData),
			 
			   function (err) {
				   if (err) {
					   console.error('Error occured when writing userData.json');
				   }
			   }
			 );


		}).catch((err) => console.error('Failed to read file\n', err));

		console.log("Compleated"); 
		message.say("Current Django fails = " + localData);
		
		return localData; 
}
