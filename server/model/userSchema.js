const jwt=require("jsonwebtoken");
const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');

//koi vi name de sktae ho 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})



//we are hashing password 
userSchema.pre('save',async function(next){
    console.log("inside");
    if(this.isModified('password')) //jab password change ho tab ye chle 
    {
        this.password= await bcrypt.hash(this.password,12); //this.pass= user ka passwrod and 12 round of hashing 
        this.cpassword= await bcrypt.hash(this.cpassword,12);
    }
    next();
})

//we are generatng token 
userSchema.methods.generateAuthToken = async function(){
    try{
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY)//it take tow key payload and unique key \
        this.tokens=this.tokens.concat({token:token});
        await  this.save();
        return token;
    }
    catch(err)
    {
        console.log(err);
    }
}
//create new collection 
const User=mongoose.model('USER',signupSchema);
module.exports=User;