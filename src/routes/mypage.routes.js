var express = require("express");
const router = express.Router();
const mypageController = require("../controller/mypage.controller");

router.get("/", mypageController.getMyDiary, function(req, res){
    res.sendFile(path.join(__dirname + "/src/public/mypage.html"))   
});

router.post("/", async function(req, res) {
    console.log("라우터 들어오나요")
    console.log(req.body);
    var result = await mypageController.updateData(req.body, res);
    return res.send(result);
});

// router.get("/", async function(req, res){
//     var result = await mypageController.getData(req, res)
//     console.log("다시오나요?");
//     console.log(result);
//     console.log(result.Data[0].user_webid)
//     res.send({user_webid: result.Data.user_webid},
//         {user_nickname: result.Data.user_nickname},
//         {user_email: result.Data.user_email},
//         {user_birthday: result.Data.user_birthday})  
// }); 

module.exports = router;