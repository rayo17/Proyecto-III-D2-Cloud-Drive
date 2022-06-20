
const application=require("./application")
const port=application.get("port") // se estable el puerto
const database=require("./database")// se importa la base de datos moongoseDb
async function main(Port){

    await application.listen(Port);// await sirve para codigo asincrono y se asigna a la escucha el puerto 
    console.log(`server connect on port ${Port}`);//puerto a la escucha
    database();//se inicia la funcion del base de Datos

}
main(port);