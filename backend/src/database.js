// codigo de la base de datos
const mongoose=require("mongoose");
const url="";
mongoose.connect(url,{
    userNewurlParser:true,
    useCreateIndex:true
});


const connection =mongoose.connection;

