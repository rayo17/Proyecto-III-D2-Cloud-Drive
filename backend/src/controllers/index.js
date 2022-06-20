const registro=require("./registro");
const login=require("./login");
const getUserById=require("./getUsersById");
const archivoUser=require("./archivosUser");
// Se exportan todos los controllers para mejor manejo
module.exports={// se exportan todos los controller

    registro,
    login,
    getUserById,
    archivoUser,
}