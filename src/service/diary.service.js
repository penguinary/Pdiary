const diaryDao = require('../dao/diary.dao');

//get_main_service
async function postDiary(postDiary_req) {
    console.log("서비스 들어옴");
    try {
        if(!postDiary_req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const postDiary_data = await diaryDao.postDiary(postDiary_req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : postDiary_data
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}

async function putDiary(putDiary_req) {
    console.log("서비스 들어옴");
    try {
        if(!putDiary_req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const putDiary_data = await diaryDao.putDiary(putDiary_req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : putDiary_data
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
    postDiary,
    putDiary
}