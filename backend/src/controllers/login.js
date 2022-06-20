const bycrypt=require("bcrypt");
const usuario=require("../models/usuario")
const User=require("../models/usuario");
const login=async (req,res)=>{
    const{correo,contraseña}=req.body;// recibe dos objetos para validar
    User.findOne({correo}).then(usuario=>{// verifica si el correo existe o no para acceder a comprimir archivos
    if(!usuario){
        return res.json({message: "usario no encontrado"})// no se encontro el usuario tiene que registrarse
    }
    bycrypt.compare(contraseña,usuario.contraseña).then((correcta)=>{// hace validacion si la contraseña ingresada es correcta
        if(correcta){// 
            const {id}=usuario;// se accede al id
            res.json({
                message:"logiado correctamente",
                usuario: {
                    id,
                }
            });
        }else{
            return res.json({message:"su contraseña es incorrecta"});// sin
        }
    })
})

};

module.exports=login;