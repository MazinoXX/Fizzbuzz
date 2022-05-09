const TelegramBot = require("node-telegram-bot-api");
const WhoopaController = require("./../lib/controllers/WhoopaController");
require('dotenv').config();

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.KEY;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = WhoopaController.fizzBuzzNumber(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    }else{
        const chatId = msg.chat.id;
        const stackExplorer = msg.text;

        if(stackExplorer === "node"){
            const nodeExplorer = WhoopaController.getExplorersUsernameByMission(stackExplorer);
            const responseBot = `Lista de usernames en Node ${JSON.stringify(nodeExplorer)}`;
            bot.sendMessage(chatId, responseBot);
        }else if(stackExplorer === "java"){
            const javaExplorer = WhoopaController.getExplorersUsernameByMission(stackExplorer);
            const responseBot = `Lista de usernames en Java ${JSON.stringify(javaExplorer)}`;
            bot.sendMessage(chatId, responseBot);
        }else{
            bot.sendMessage(chatId, "Envía un número válido");
        }
        }

});
