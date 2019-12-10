/**
 * Callbacks
 * =====================
 * If I click a button ...
 */
module.exports = function (bot, info, config, auth) {

	bot.on('callback_query', (ctx) => {

		var op = ctx.callbackQuery.data;
		switch(op){

			case 'shoot':
				ctx.deleteMessage();
				ctx.answerCbQuery('Shoot triggered');
				ctx.replyWithAnimation('https://media.giphy.com/media/l3nW5hP4Krt98LnwY/giphy.gif');
				break;

		}

	});

};
