/**
 * Hears
 * =====================
 * If i write "hi" bot response "hello"
 */
const Markup = require('telegraf/markup');

module.exports = function (bot, info, config, auth) {

	bot.hears(/ping/i, (ctx) => {
		if(auth(ctx)) {
			ctx.reply('pong');
		}
	});

	bot.hears(/unixmib/i, (ctx) => {
		if(auth(ctx)) {
			ctx.replyWithSticker('CAADBAADZAIAAls4VQMusShtjmekHxYE');
		}
	});

	bot.hears(/fail/i, (ctx) => {
		if(auth(ctx)) {

			var giphy = require('giphy-api')(config.giphy.key);

			giphy.search({
				q: 'robot fail',
				rating: 'g'
			}, function (err, res) {

				// Res contains gif data!
				var gifs = res.data;
				var rand = Math.floor((Math.random() * 25) + 1);
				var gif = gifs[rand].images.downsized_large.url;
				ctx.replyWithAnimation(gif);

			});

		}
	});

	bot.hears(/l([o]+)l/i, (ctx) => {
		if(auth(ctx)) {

			var giphy = require('giphy-api')(config.giphy.key);

			giphy.search({
				q: 'lol',
				rating: 'g'
			}, function (err, res) {

				// Res contains gif data!
				var gifs = res.data;
				var rand = Math.floor((Math.random() * 25) + 1);
				var gif = gifs[rand].images.downsized_large.url;
				ctx.replyWithAnimation(gif);

			});

		}
	});

	bot.hears(/(spara|kill|shoot)/i, (ctx) => {
		if(auth(ctx)) {
			ctx.replyWithAnimation(
				'https://media.giphy.com/media/26xopsR7cWySdKNgY/giphy.gif',
				Markup.inlineKeyboard([
					Markup.callbackButton('Shoot!', 'shoot')
				]).extra()
			);
		}
	});

};
