<<<<<<< HEAD
var path = require("path");
=======
const path = require("path")
>>>>>>> 3ce175b46ce46d8e7f9fe86d88ca68400dbb3a8a
var express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller");

<<<<<<< HEAD
// router.get("/", loginController.signIn);
// router.get("/", function(req, res){
//     res.sendFile(path.join(__dirname + "/src/public/login.html"));
// });

router.post("/", loginController.signUp);
=======
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
>>>>>>> 3ce175b46ce46d8e7f9fe86d88ca68400dbb3a8a

module.exports = router;