const mongoose=require('mongoose');

const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})   
.then(()=>console.log("DB ka connection is successful"))
.catch((error)=>{
    console.log("Issue in DB connection");
    console.error(error.message);
    process.exit(1);
});