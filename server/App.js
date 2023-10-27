const dotenv=require("dotenv");
const express=require('express');
const { mongo, default: mongoose } = require('mongoose');
const app= express();

dotenv.config({path:'./config.env'});
require("./db/conn");
// require("../server/model/userSchema");

//it need to parse data in json using middel ware 
app.use(express.json());

//fetch file using middleware 
app.use(require('./rout/auth'));


const PORT=process.env.PORT;

// app.get("/about",(req,res)=>{
//     console.log(`hello about`);
//     res.send(`Hello from about server`);
// });

app.listen(PORT,()=>{
    console.log(`server started at port no ${PORT}`);
})