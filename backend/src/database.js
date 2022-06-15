// codigo de la base de datos
const mongoose = require("mongoose");
const password="holaSoyElRayoMcQueen";
const username="andresRayo"
const url = `mongodb+srv://${username}:${password}@clouddrive.lpnnx.mongodb.net/?retryWrites=true&w=majority`;

const conectando = async () => {
    await mongoose.connect(url)
    .then(()=>console.log("base de datos conectada"))
    .catch((error)=>{console.error(error); console.log("error en base")});
}


module.exports=conectando;

