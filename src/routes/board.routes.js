var express = require("express");
const router = express.Router();
const boardController = require("../controller/board.controller");

router.get("/", boardController.getBoard);


module.exports = router;