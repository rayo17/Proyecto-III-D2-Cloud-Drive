const bycrypt=require("bcrypt");
const usario=require("../models/usuario")
const User=require("../models/usuario");
const login=async (req,resp)=>{
    const{coorreo,contraseña}=req.body;
    if(!usuario){
        return res.json({message: "usario no encontrado"})
    }
    bycrypt.compare(contraseña,usuario.contraseña).then((correcta)=>{
        if(correcta){
            const {id}=usario;
            res.json({
                message:"se ha Registrado correctamente",
                usuario: {
                    id,
                }
            });
        }else{
            return res.json({message:"su contraseña es incorrecta"});
        }
    })

};

module.exports=login;