const { Router }=require("express");
const { route, response } = require("../application");
const{getUsers, create }= require("../controllers/userControl")
const router=Router();

router.route("/")
.get(getUsers)
.post(create)

module.exports=router;