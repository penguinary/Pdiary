const loginDao = require('../dao/login.dao');

//signIn_service
async function signIn(id, pw) {
    console.log("로그인 서비스", id, pw);
    try {
        if(!id || !pw) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const signIn_data = await loginDao.signIn(id, pw);
        if(signIn_data == "empty") {
            return {
                "Message" : "로그인 실패",
                "Status" : 404,
                "Data" : signIn_data
            }
        }
        else {
            return {
                "Message" : "로그인 성공",
                "Status" : 200,
                "Data" : signIn_data
            }
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}

async function signUp(signUp_req) {
    console.log("서비스 들어옴");
    try {
        if(!signUp_req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const signUp_data = await loginDao.signUp(signUp_req);
        return {
            "Message" : "성공",
            "Status" : 200
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}

module.exports = {
    signIn,
    signUp
}