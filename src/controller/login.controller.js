const loginService = require("../service/login.service");

//login controller
async function signIn(req, res) {
    var userId = req.body.user_webid;
    var userPw = req.body.user_webpw;
    console.log("로그인 컨트롤러", userId, userPw);
    const signIn_data = await loginService.signIn(userId, userPw);
    if(signIn_data.Data == "empty") {
        return res.redirect("/login");
    }
    if(signIn_data.Status == 200) {
        //로그인 성공 시 쿠키 생성
        console.log(signIn_data.Data);
        req.session.user_id=signIn_data.Data[0].user_id;
        req.session.user_nickname=signIn_data.Data[0].user_nickname;
        req.session.save(function() {
            console.log("세션 확인", req.session)
        })
        return res.redirect("/board.html");
    }
    return signIn_data;
}
//signOut controller
async function signUp(req, res) {
    const signUp_req = req.body;
    console.log("회원가입 데이터 확인", signUp_req);
    const signUp_data = await loginService.signUp(signUp_req);
    return res.redirect("/");
}

module.exports = {
    signIn,
    signUp
}