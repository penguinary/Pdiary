const path = require("path")
var express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller");

// router.get("/", loginController.getMain);
// router.post("/", loginController.signUp);

// 회원가입
// router.get("/", function(req,res){
//     res.sendFile(path.join(__dirname + "/src/public/login.html"));
// });

router.post("/", async function(req,res){
   // 회원가입 컨트롤러 호출
    var result = await loginController.signUp(req, res);
    res.send(result);
});

module.exports = router;