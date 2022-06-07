const { Router }=require("express");
const { route, response } = require("../application");
const router=Router();

router.route("/")
.get((req,res)=>res.send("user"))
.post()
router.route("./:id")
.get()
.put()
.delete()
module.exports=router;