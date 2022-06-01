const mongoose = require("nongoose");
const url= "put the direction ";
mongoose.connect(url)// colocar la direccion de la base de datos a la cual se debe conectar
.then(db=console.log("base data conenected"))
.catch(err=>console.error(err))


module.exports=mongose;