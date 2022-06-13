// codigo de la base de datos
const mongoose = require("mongoose");
const url = "";

const comprobando = async () => {
    await mongoose.connect(url)
    .then(()=>console.log("base de datos conectada"))
    .catch((error)=>console.error(error))
}


const connection = mongoose.connection;

