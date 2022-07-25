
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
	
	
		//message.say("Current Django fails = " + localData);
		
		run(message) {

			const comp = new MessageEmbed()
		.setColor('#74EED1')
		.setTitle('Django Failure!')
		.setThumbnail('https://yt3.ggpht.com/PPXa-3PVX73Gcd4t0wzR91G8TZ-pt7p9gyJIze2C7MYbaAa54rJqLztq44jPMmZyOTJmJmLJQA=s900-c-k-c0x00ffffff-no-rj')
		.addFields(
		    { name: ('Oh, no, another Django Fail! The New Number of Django Fails is **' + localData + '**\n\n'), 
		      name: 'Follow this section of the guide to ensure Django is configured properly: ', value: 'https://github.com/TheSpaghettiDetective/obico-server#configure-django-site' },
		)
		.setTimestamp()
		.setFooter('Do -help for more info');
			return message.say(comp); 
		}
		return localData; 
}
