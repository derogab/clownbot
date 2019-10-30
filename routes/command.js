/**
 * Commands
 * =====================
 * Write / and see commands of bot
 */
module.exports = function(bot, config, auth) {

    /**
     * Command: appunti
     * =====================
     * Send 'appunti' link
     *
     */
    function appunti(ctx) {
        if(auth(ctx)) {
            ctx.reply("Appunti: https://github.com/dlcgold/Appunti");
        }
    }
    bot.command('appunti', appunti);

    /**
     * Command: help
     * =====================
     * Send list of bot commands
     */
    function help(ctx) {
        if(auth(ctx)) {
            ctx.reply("Ecco alcuni dei comandi\n\n/start - messaggio di benvenuto\n/appunti - link agli appunti\n/help - lista comandi e suggerimenti\n\nE molte parole chiave che dovrai scoprire :)\n\nVersion: "+config.version);
        }
    }
    bot.command('help', help);

    /**
     * Command: start
     * =====================
     * Send "Ciao!" and help message
     */
    function start(ctx) {
        if(auth(ctx)) {

            ctx.reply('Ciao!');
            help(ctx);   
        
        }
    }
    bot.command('start', start);
};