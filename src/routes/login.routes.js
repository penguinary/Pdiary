const path = require("path")
var express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller");

// router.get("/", loginController.getMain);
// router.post("/", loginController.signUp);

// 회원가입
router.post("/", async function(req,res){
    console.log("들어옴");
    console.log(req.body.user_webid, req.body.user_webpw)
    var loginreq = {user_webid : req.body.user_webid,
        user_webpw : req.body.user_webpw}
    var result = await loginController.signIn(loginreq, res);
    console.log("hi");
    res.send(result);
});

router.post("/", async function(req,res){
   // 회원가입 컨트롤러 호출
    var result = await loginController.signUp(req, res);
    res.send(result);
});

module.exports = router;