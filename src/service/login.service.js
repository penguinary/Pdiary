const loginDao = require('../dao/login.dao');

//get_main_service
async function getMain(getMain_req) {
    console.log("서비스 들어옴");
    try {
        if(!getMain_req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const getMain_data = await loginDao.getMain(getMain_req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : getMain_data
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
    getMain
}