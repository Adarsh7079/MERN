const jwt=require("jsonwebtoken");
const express=require("express");
const bcrypt = require('bcryptjs');
//router for backend providede by backend 
const router=express.Router();

require("../db/conn"); //connection with db
const User=require("../model/userSchema"); //get user schema 
router.get('/',(req,res)=>{
    res.send(`hello from router js `);
})

//******************using Promisses**********
// router.post('/register',(req,res)=>{
//     const {name,email,phone,work,password,cpassword}=req.body;
//     // console.log(name);
//     // console.log(password);
//     // console.log(req.body);
//     // console.log(req.body.email);
//     // res.json({message:req.body});
//     // res.send(`mer register page`);

//     if( !name || !email || !phone || !work ||!password ||!cpassword)
//     {
//         return res.status(422).json({error:"Plese filled all filedl"});
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist)
//         {
//             return  res.status(422).json({error:"email already exists"});
//         }
//         const user=new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user register successfully"});
//         }).catch((err)=>res.status(500).json({error:"faild register"}));
//     }).catch(err=>{console.log(err)});
// })

//**************using async and await***********

router.get('/',(req,res)=>{
    res.send(`hello from router js `);
})
router.post('/register',async(req,res)=>{

    const {name,email,phone,work,password,cpassword}=req.body;

    if( !name || !email || !phone || !work ||!password ||!cpassword)
    {
        return res.status(422).json({error:"Plese filled all filedl"});
    }
    try{
        const userExist=await  User.findOne({email:email})
        if(userExist)
        {
            return  res.status(422).json({error:"email already exists"});
        }
        else if(password != cpassword)
        {
            return  res.status(422).json({error:"password not match "});
        }
        const user=new User({name,email,phone,work,password,cpassword});

        //yaha pe save karne ke pahle hash kar lo 
        await user.save();
        res.status(201).json({message:"user register successfully"});
    }
    catch(err){
        console.log(err)
    }
  
})
//login rout 
router.post('/signin', async(req,res)=>{
    // console.log(req.body);
    // res.json({message:"awsome"});

    try{
        let token;
        const {email,password}=req.body;
        if(!email || !password)
        {
            return res.status(400).json({error:"plese fill the data "});
        }

        const useLogin=await User.findOne({email:email});
        // console.log(useLogin);
        if(useLogin)
        {
            const isMatch=await bcrypt.compare(password,useLogin.password);
            token= await useLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
            if(!isMatch)
            {
                res.status(400).json({error:"Invaid Credientail"});
            }
            else
            {
                res.json({mssage:"use Signin successfully"});
            }
        }
        else
        {
            res.status(400).json({error:"Invaid Credientail"});
        }
        
       
    }
    catch(err)
    {
        console.log(err);
    }
});

//about ka page 
router.get('/about',authenticate,(req,res)=>{
    console.log(`hello my About`);
    res.send(`Hello About Word from the server`);
});
module.exports=router;