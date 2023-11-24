var express = require("express");
const router = express.Router();
const mypageController = require("../controller/mypage.controller");

router.get("/", mypageController.getMyDiary);

router.post("/", async function(req, res) {
    console.log("라우터 들어오나요")
    console.log(req.body);
    var result = await mypageController.updateData(req.body, res);
    res.send(result);
});

module.exports = router;