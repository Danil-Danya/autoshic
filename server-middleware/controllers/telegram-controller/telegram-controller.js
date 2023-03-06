import TelegramBot from 'node-telegram-bot-api';
import *as dotenv from 'dotenv';

const processStart = dotenv.config();

export const bot = new TelegramBot(process.env.token, {polling: true});

bot.on('polling_error', (err) => console.log(err));


bot.setMyCommands([{
    command: '/start',
    description: 'Запустить бота.'
}]);

bot.on('message', async (message) => {
    const chatId = message.chat.id;
    const getMessage = message.text;

    if (getMessage === '/start') {
        await bot.sendMessage(chatId, `Привет ${message.from.first_name}`);
    }
})