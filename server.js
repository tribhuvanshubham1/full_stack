const express = require('express');
const dotenv=require("dotenv");
dotenv.config();
const PORT=process.env.PORT;
const cors = require('cors');
const connection = require('./config/db');
const usersRouter = require('./routes/usersRouter');
const postsRouter = require('./routes/postsRouter');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
async function MasaiServer(){
    await connection();
    app.listen(PORT, ()=> {
        console.log('Listening to PORT', PORT);
    })
}
MasaiServer();