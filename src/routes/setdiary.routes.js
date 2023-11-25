var express = require("express");
const router = express.Router();
const setdiaryController = require("../controller/setdiary.controller");

router.get("/", setdiaryController.getDiary);


module.exports = router;