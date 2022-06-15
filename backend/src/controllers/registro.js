const bcry=require("bcrypt");
const Usuario=require("../models/usuario");
const registro=async (req,resp)=>{
    const {correo, contraseña}=req.body
    usuario.findOne({correo}).then(usuario=>{
        if(usuario){
            return res.json({menssage:"ya existe ese correo"});

        }else if (!correo || !contraseña){
            return res.json({message:"Faltan elementos por completar"});
        }
        else{
            bcry.hash(contraseña,10,(error,contraseña)=>{
                if(error) res.json({err});
                else{
                    const newUsuario=new Usuario({
                        correo,
                        contraseña:contraseñaHasheada,
                    })
                    newUsuario.save().then(usuario=>{
                        res.json({
                            message:"se creo correctamente"
                        })
                    })
                }
            })
        }
    })
};

module.exports=registro; 