var express = require("express");
const router = express.Router();
const diaryController = require("../controller/diary.controller");

router.post("/", diaryController.postDiary);

router.put("/", diaryController.putDiary);


module.exports = router;