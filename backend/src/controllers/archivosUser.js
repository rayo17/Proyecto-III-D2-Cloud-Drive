const Usuario=require("../models/usuario");// controller para acceder a los archivos de los usuarios
const archivoUser=(req,res)=>{
  res.send("archivo subido")
}

module.exports=archivoUser;