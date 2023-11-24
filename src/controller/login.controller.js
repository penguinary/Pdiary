const loginService = require("../service/login.service");

//get_main_controller
async function signIn(req, res, next) {
    console.log("로그인 컨트롤러 들어옴");
    const signIn_req = req.query;
    console.log("로그인 데이터 들어오는거 확인", signIn_req);
    const signIn_data = await loginService.signIn(signIn_req);
    return res.status(signIn_data.Status).json(signIn_data);
}
async function signUp(req, res, next) {
    console.log("컨트롤러 들어옴");
    const signUp_req = req.body;
    console.log("데이터 들어오는거 확인", signUp_req);
    const signUp_data = await loginService.signUp(signUp_req);
    return res.status(signUp_data.Status).json(signUp_data);
}


module.exports = {
    signIn,
    signUp
}