var path = require("path");
var express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller");

// router.get("/", loginController.signIn);
// router.get("/", function(req, res){
//     res.sendFile(path.join(__dirname + "/src/public/login.html"));
// });

router.post("/", loginController.signUp);

module.exports = router;