const bcry=require("bcrypt");
const Usuario=require("../models/usuario");
const registro=async (req,res)=>{//codigo asincrono  es el que valida los datos del registro desde del backend
    const {correo, contraseña}=req.body;// recibe dos objetos 
    Usuario.findOne({correo}).then(usuario=>{ // busca el correo  y si el existe el usuario 
        if(usuario){
            return res.json({menssage:"ya existe ese correo"});// retorna que ya existe ee correo

        }else if (!correo || !contraseña){
            return res.json({message:"Faltan elementos por completar"});// faltan datos para completar 
        }
        else{ // si no hay errores entonces se registra el nuevo usuario
           
            bcry.hash(contraseña,10,(error,contraseñaHasheada)=>{// 
                if(error) res.json({err});
                else{
                    const newUsuario=new Usuario({// se crea un nuevo usuario con el c
                        correo,
                        contraseña:contraseñaHasheada,
                    });
                    newUsuario.save().then(usuario=>{// guarda el usuario en la base de datos
                        res.json({// responde con un mensaje
                            message:"se creo correctamente", usuario
                        });
                    
                    })
                    .catch(error=> console.error(error))// captura un error
                }
            })
        }
    })
};

module.exports=registro;  