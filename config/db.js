const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const dotenv=require("dotenv");
dotenv.config();
const username=process.env.USER_NAME;
const password=process.env.PASSWORD;
const connection = async ()=>{
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.dkffjqp.mongodb.net/allstack?appName=mongosh+1.7.1`);    
    console.log("connected to the atlas Cluster");
}
module.exports=connection;