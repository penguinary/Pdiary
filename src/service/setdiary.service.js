const setdiaryDao = require('../dao/setdiary.dao');

async function getDiary(getDiary_req) {
    console.log("서비스 들어옴");
    try {
        if(!getDiary_req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const getDiary_data = await setdiaryDao.getDiary(getDiary_req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : getDiary_data
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
    getDiary
}