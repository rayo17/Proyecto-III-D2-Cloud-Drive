
const application=require("./application")
async function main(Port){

    await application.listen(Port);
    console.log(`server connect on port ${Port}`);//puerto a la escucha

}
main(4000);