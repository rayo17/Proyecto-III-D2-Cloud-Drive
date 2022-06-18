const usuario=require("../models/usuario");
const User=require("../models/usuario");

const getUser=async (req,res)=>{
    const {UserId }= req.params;
    console.log(`es indefinido ${UserId}`)
    if( UserId.length === 24){
        User.findById(UserId).then(ususario=>{
            if(!usuario){
                return res.json({message: "no se encontro el usuario"});

            }else{

                const {_id,contraseña, __v,...resto}=ususario._doc;
                res.json(resto);

            }
        });
    }else{
        res.json({message:"contraseña incorrecta"});
    }

};

module.exports=getUser;