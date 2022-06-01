const express=require("express");
const router= express.Router();// return a object en this objec i can insert routes


router.get("/",(req,res)=>{res.json({
    status:"FUNCION"
});});//get a routes
module.exports=router;// export routes 