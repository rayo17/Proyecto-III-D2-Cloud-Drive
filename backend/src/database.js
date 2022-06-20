// codigo de la base de datos
const mongoose = require("mongoose");
const password="holaSoyElRayoMcQueen";//contraseña
const username="andresRayo"//nombre del usuarop
const url = `mongodb+srv://${username}:${password}@clouddrive.lpnnx.mongodb.net/?retryWrites=true&w=majority`;//url de la base de datos

const conectando = async () => {
    await mongoose.connect(url)// se conecta a la url
    .then(()=>console.log("base de datos conectada"))//promesa 
    .catch((error)=>{console.error(error); console.log("error en base")});//captura errores
}

module.exports=conectando;// se exporta la funcion conectado


