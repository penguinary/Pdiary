const loginService = require("../service/login.service");

//signIn controller
async function signIn(loginreq, res) {
    console.log("로그인 컨트롤러 들어옴");
    const signIn_data = await loginService.signIn(loginreq);
    if(!signIn_data) {
        alert("로그인 실패");
        return res.redirect("/login");
    }
    else {
        console.log("로그인 성공");
        return res.redirect("/board");
    }
}
async function signUp(req, res) {
    console.log("컨트롤러 들어옴");
    const signUp_req = req.body;
    console.log("데이터 들어오는거 확인", signUp_req);
    const signUp_data = await loginService.signUp(signUp_req);
    var msg = "가입 완료";
    var data = {code : signUp_data,
                msg : msg};
    return res.redirect("/");
}

module.exports = {
    signIn,
    signUp
}