const mypageDao = require('../dao/mypage.dao');

//get_main_service
async function getMyDiary(getMyDiary_req) {
    console.log("서비스 들어옴");
    try {
        if(!getMyDiary_req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const getMyDiary_data = await mypageDao.getMyDiary(getMyDiary_req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : getMyDiary_data
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
    getMyDiary
}