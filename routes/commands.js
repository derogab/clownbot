/**
 * Commands
 * =====================
 * Write / and see commands of bot
 */
module.exports = function(bot, info, config, auth) {

    /**
     * Command: appunti
     * =====================
     * Send 'appunti' link
     *
     */
    function appunti(ctx) {
        if(auth(ctx)) {
            ctx.reply("[Appunti](https://github.com/dlcgold/Appunti) by @dlcgold", {
                parse_mode: "Markdown",
                disable_web_page_preview: true
            });
        }
    }
    bot.command('appunti', appunti);

    /**
     * Command: sponsor
     * =====================
     * Send link to support this bot
     *
     */
    function sponsor(ctx) {
        if(auth(ctx)) {
            ctx.reply("Puoi supportare il bot a [questo link](https://patreon.com/derogab)", {
                parse_mode: "Markdown",
                disable_web_page_preview: true
            });
        }
    }
    bot.command('sponsor', sponsor);

    /**
     * Command: version
     * =====================
     * Send bot version
     *
     */
    function version(ctx) {
        if(auth(ctx)) {
            ctx.reply("Version: "+info.version);
        }
    }
    bot.command('version', version);

    /**
     * Command: help
     * =====================
     * Send list of bot commands
     */
    function help(ctx) {
        if(auth(ctx)) {
            ctx.reply("Ecco alcuni dei comandi\n\n/start - messaggio di benvenuto\n/appunti - link agli appunti\n/sponsor - link per supportare il bot\n/version - versione del bot\n/help - lista comandi e suggerimenti\n\nE molte parole chiave che devi ancora scoprire :)\n\nVersion: "+info.version);
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