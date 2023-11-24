var express = require("express");
const router = express.Router();
const diaryController = require("../controller/diary.controller");

router.post("/", diaryController.postDiary);


module.exports = router;