const path = require("path")
var express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller");

// 로그인
router.post("/login", async function(req,res){
    console.log("로그인라우터", req.body.user_webid, req.body.user_webpw)
    var loginResult = await loginController.signIn(req, res);
    return res.send(loginResult);
});

router.get("/logout", function(req, res) {
    console.log("clear cookie");
    req.session.destroy(function(err){
        if(err) {
            console.error(err);
            return res.redirect("/");
        } else {
            res.clearCookie(options.name);
            return res.redirect("/");
        }
    })
});

// 회원가입
router.post("/signup", async function(req,res){
    var result = await loginController.signUp(req, res);
    res.send(result);
});

module.exports = router;