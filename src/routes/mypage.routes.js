var express = require("express");
const router = express.Router();
const mypageController = require("../controller/mypage.controller");

router.get("/", mypageController.getMyDiary, function(req, res){
    res.sendFile(path.join(__dirname + "/src/public/mypage.html"))   
});


module.exports = router;