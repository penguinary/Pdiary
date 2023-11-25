const path = require("path")
var express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller");

router.post("/login", async function(req,res){
    console.log("들어옴");
    console.log(req.body.user_webid, req.body.user_webpw)
    var loginreq = {user_webid : req.body.user_webid,
        user_webpw : req.body.user_webpw}
    var result = await loginController.signIn(loginreq, res);
    console.log("hi");
    res.send(result);
});

router.post("/signup", async function(req,res){
    var result = await loginController.signUp(req, res);
    res.send(result);
});

module.exports = router;