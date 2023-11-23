var express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller");

router.get("/index", loginController.getMain);

module.exports = router;