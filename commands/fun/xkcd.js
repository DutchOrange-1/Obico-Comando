const commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const request = require('request-promise');

module.exports = class XkcdCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'xkcd',
			group: 'fun',
			memberName: 'xkcd',
			description: 'Get an xkcd comic',
			guildOnly: false,
			aliases: ['x', 'k'],
			args: [{
				key: 'id',
				type: 'string',
				prompt: 'haha',
				default: false,
			}],
		});
	}

	run(message) {
		return message.say('Getting image');
	}

	async run(msg, {id}) {
		request({
			uri: `http://wa.funsite.cz/xkcd/` + (id ? (id === 'latest' ? '?new' : '?id=' + id) : ''),
			json: true,
			headers: {
				'User-Agent': 'TSD',
			},
		}).then((a) => {
			if (!a.image) return msg.say('Couldn\'t find that ID.');
			const embed = new MessageEmbed()
				.setColor('#74EED1')
				.setTitle(a.title)
				.setDescription(a.description)
				.setImage(a.image)
				.setURL(a.url);
			msg.say(embed);
		}).catch((e) => {
			console.log('{red}Xkcd error:{reset}', e);
			return msg.say('Something went wrong, sorry.').catch(() => { });
		});
	}
};
