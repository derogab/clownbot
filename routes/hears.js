/**
 * Hears
 * =====================
 * If i write "hi" bot response "hello"
 */
const { Markup } = require('telegraf');

module.exports = function (bot, info, config, auth) {

	bot.hears(/\bping\b/i, (ctx) => {
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

	bot.hears(/(l([o]+)l|[a]*[h]+[a]+[h]+)/i, (ctx) => {
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

	bot.hears(/(boo*om|bomba|bomb|explosion|esplosione)/i, (ctx) => {
		if(auth(ctx)) {
			ctx.replyWithAnimation(
				'https://media.giphy.com/media/3o7qEcqN5PjN90jNC0/source.gif',
				Markup.inlineKeyboard([
					Markup.callbackButton('Boom!', 'boom')
				]).extra()
			);
		}
	});

	bot.hears(/\b(serpente|snake)\b/i, (ctx) => {
		if(auth(ctx)) {
			ctx.replyWithAnimation(
				'https://media.giphy.com/media/shohQj1Ju9fJC/giphy.gif'
			);
		}
	});

};
