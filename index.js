require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const Handler = require('./Handler.js');
const Reader = require('./Reader.js');

const reader = new Reader(`./${process.env.GROUPS}`);
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on('message', (msg) => {
    console.log(msg);
    new Handler(bot, msg, reader)
})