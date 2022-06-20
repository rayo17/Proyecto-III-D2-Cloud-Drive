const usuario=require("../models/usuario");//
const User=require("../models/usuario");

const getUser=async (req,res)=>{ //obtiene el usuario
    const {UserId }= req.params;//recibe un ojeto que tiene un id
    if( UserId.length === 24){//valida la cantidad de caracteres de la contraseña 
        User.findById(UserId).then(ususario=>{ //busca el usuario con ese id
            if(!usuario){
                return res.json({message: "no se encontro el usuario"});// si no se encuenta ningun usuario se retorna el message

            }else{

                const {_id,contraseña, __v,...resto}=ususario._doc; //el usuario si se encontro
                res.json(resto);
            }
        });
    }else{
        res.json({message:"contraseña incorrecta"});//el usuari ingreso una contraseña incorrecta
    }

};

module.exports=getUser;