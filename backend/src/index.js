
const application=require("./application")
const port=application.get("port") // se estable el puerto
async function main(Port){

    await application.listen(Port);
    console.log(`server connect on port ${Port}`);//puerto a la escucha

}
main(port);