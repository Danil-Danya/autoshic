import express from "express";
import mongoose, { model } from "mongoose";
import *as dotenv from 'dotenv';

import { addCommentRouter, commentsRouter, telegramRouter } from "./routers/router";
import { bot } from "./controllers/telegram-controller/telegram-controller";

const processStart = dotenv.config();
console.log(process.env.link_to_connect_DB);


const app = express();

const DB_Connect = mongoose.connect(process.env.link_to_connect_DB, {
    useNewUrlParser: true,
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

export default app;

telegramRouter(app, bot);
commentsRouter(app);
addCommentRouter(app);