/**
 * Hears
 * =====================
 * If i write "hi" bot response "hello"
 */
module.exports = function (bot, config, auth) {

	bot.hears(/unixmib/i, (ctx) => {
		if(auth(ctx)) {
			ctx.replyWithSticker('CAADBAADZAIAAls4VQMusShtjmekHxYE');
		}
	});

};
