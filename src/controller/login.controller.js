const loginService = require("../service/login.service");

//get_main_controller
async function getMain(req, res, next) {
    console.log("컨트롤러 들어옴");
    const getMain_req = req.query;
    console.log("데이터 들어오는거 확인", getMain_req);
    const getMain_data = await loginService.getMain(getMain_req);
    return res.status(getMain_data.Status).json(getMain_data);
}
async function signUp(req, res, next) {
    console.log("컨트롤러 들어옴");
    const signUp_req = req.body;
    console.log("데이터 들어오는거 확인", signUp_req);
    const signUp_data = await loginService.signUp(signUp_req);
    return res.status(signUp_data.Status).json(signUp_data);
}


module.exports = {
    getMain,
    signUp
}