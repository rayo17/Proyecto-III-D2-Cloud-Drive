const express = require("express")
const multer = require("multer");
const cors = require("cors");
const app = express(); //devuelve un objeto express este es nuestro serviodr
const controllers = require("./controllers");
const upload=require("./controllers/subirArchivo")
//const baseDatos=require("/database")
//settings
app.set("port", process.env.PORT || 4000);//estableciendo el puerto

// middlewares son procesos que se ejecutan intermedio entre el backend y el frontend


app.use(cors());//
app.use(express.json());//se usan objtos json
//get y post para obtener y guardar infomacion en la base de datos 
app.get("/user/:UserId", controllers.getUserById);
app.post("/registro", controllers.registro);//registra los usuarios
app.post("/login", controllers.login);// loguea los usuarios
app.post("/archivos",upload.single("file"),(req,res)=>{//guarda los archivos en la carpeta upload
    res.send(req.body)
    res.send(req.files)

console.log(req.body)
console.log(req.file)
});

//routes rutas del servidor
//app.use("/appi/users",require("./routes/users"));

module.exports = app;// se exporta app
