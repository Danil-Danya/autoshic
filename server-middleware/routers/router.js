import app from "..";
import { comments } from "../models/commets-schema";

export const telegramRouter = (app, bot) => {
    app.post('/telgram-api-bot/', async (req, res) => {
        try {
            const name = req.body.data.name;
            const tell = req.body.data.tell;
            const order = req.body.data.order;
            const message = req.body.data.message;

            await bot.sendMessage(
                process.env.chat_ID, 
                `Имя клиента: ${name},\nТелефон клиента: +${tell},\nВид услуги: ${order},\nСообщение:\n\n${message}`
            );
        }
        catch (error) {
            await console.log(`У вас ошибка: ${error}`);
        }
    });
}

export const commentsRouter = (app) => {
    app.get('/comments', async (req, res) => {
        try {
            const commentsVar = await comments.find({});
            
            return res.json(commentsVar);
        }
        catch (error) {
            await console.log(`У вас ошибка: ${error}`);
        }
    })
}

export const addCommentRouter = (app) => {
    app.post('/comments/', async (req, res) => {
        try {
            const comment = new comments ({
                firstName: req.body.data.firstName,
                lastName: req.body.data.lastName,
                text: req.body.data.message
            });

            await comment.save();
        }
        catch (error) {
            await console.log(`У вас ошибка: ${error}`);
        }
    })
}