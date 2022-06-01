const express=require("express");// import of express framework
const morgan =require("morgan");
const path=require("path");
const app= express();
const {mongoose}=require("./database");

//settings
app.set("port", process.env.PORT||4000)

//middlewares are funtion executes before come to routes
//routes
app.use(morgan("dev"));// recive peticiones
app.use(express.json());
//rapp.use(express.static)

//routes
app.use("/api",require("./routes/task"));// 
//static filesnm
app.use(express.static(path.join(__dirname,"public")));


//start
app.listen(app.get("port"),()=>{console.log(`server it has port ${app.get("port")}`);});