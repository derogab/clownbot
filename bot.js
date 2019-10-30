const Telegraf = require('telegraf');
const fs = require('fs');
const YAML = require('yaml');

/**
 * Init
 * =====================
 * Get data from /config.yml
 */
const file = fs.readFileSync('./config.yml', 'utf8');
const config = YAML.parse(file);

/**
 * Bot
 * =====================
 * Initialize bot instance.
 */
const bot = new Telegraf(config.bot.token, {username: config.bot.username});

/**
 * Auth
 * =====================
 * Authentication tool
 */
const auth = function(ctx){
    // not available to everyone
    if(config.auth.includes(ctx.message.chat.id)){
        return true;
    }
    return false;
}

/**
 * Router
 * =====================
 * Commands and hears (reply message). Core of bot.
 */
require(__dirname + '/routes/hears')(bot, config, auth);
require(__dirname + '/routes/command')(bot, config, auth);
require(__dirname + '/routes/inline_query')(bot, config, auth);

/**
 * Router Explicit
 * =====================
 * Uncensored content / Parental Advisory disabled
 */

fs.stat('routes/explicit.js', function(err, stat) {
    if(err == null) {
        require(__dirname + '/routes/explicit')(bot, config, auth);
    } 
});

/**
 * Polling
 * =====================
 * Telegraf Socket.
 */
bot.startPolling();