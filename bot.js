const { Telegraf } = require('telegraf');
const fs = require('fs');
const YAML = require('yaml');

/**
 * Init
 * =====================
 * Get data from /config.yml and /package.json
 */
const file = fs.readFileSync('./private/config.yml', 'utf8');
const config = YAML.parse(file);
const info = require('./package.json');

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
    // if permissions are not specified, all are enabled
    if(!config.bot.allowed_users){
        return true;
    }
    // else, not available to everyone
    if(config.bot.allowed_users.includes(ctx.message.chat.id)){
        return true;
    }
    return false;
}

/**
 * Router
 * =====================
 * Commands and hears (reply message). Core of bot.
 */
require(__dirname + '/routes/hears')(bot, info, config, auth);
require(__dirname + '/routes/commands')(bot, info, config, auth);
require(__dirname + '/routes/callbacks')(bot, info, config, auth);
require(__dirname + '/routes/inline_query')(bot, info, config, auth);

/**
 * Router Extra
 * =====================
 * Extra private contents
 */

fs.stat('private/extra.js', function(err, stat) {
    if(err == null) {
        require(__dirname + '/private/extra')(bot, info, config, auth);
    } 
});

/**
 * Polling
 * =====================
 * Telegraf Socket.
 */
bot.startPolling();