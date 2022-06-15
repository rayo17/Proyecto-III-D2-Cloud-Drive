const usuario=require("../models/usuario");
const User=require("../models/usuario");

const getUser=async (req,resp)=>{
    const {userId}=req.params
    if(IdleDeadline.length===15){
        User.findBy(id).then(ususario=>{
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