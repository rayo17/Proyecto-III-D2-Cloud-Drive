const bycrypt=require("bcrypt");
const usuario=require("../models/usuario")
const User=require("../models/usuario");
const login=async (req,res)=>{
    const{correo,contraseña}=req.body;
    User.findOne({correo}).then(usuario=>{
    if(!usuario){
        return res.json({message: "usario no encontrado"})
    }
    bycrypt.compare(contraseña,usuario.contraseña).then((correcta)=>{
        if(correcta){
            const {id}=usuario;
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
})

};

module.exports=login;