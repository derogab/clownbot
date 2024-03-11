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
 * Environments
 * =====================
 * Get environment variables from .env file
 */
require('dotenv').config()

/**
 * Bot
 * =====================
 * Initialize bot instance.
 */
const bot = new Telegraf(process.env.TELEGRAM_BOT_API_TOKEN, {username: process.env.TELEGRAM_BOT_USERNAME});

/**
 * Auth
 * =====================
 * Authentication tool
 */
const auth = function(ctx){
    // Get allowed users.
    const allowedUsersStr = process.env.TELEGRAM_ALLOWED_USERS.trim();
    const allowedUsers = allowedUsersStr ? allowedUsersStr.split(',') : [];
    // If permissions are not specified, all are enabled.
    if(!allowedUsers || allowedUsers.length == 0) return true;
    // Else check if current user is allowed.
    if(allowedUsers.includes(ctx.message.chat.id)) return true;
    // Otherwise, return false.
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