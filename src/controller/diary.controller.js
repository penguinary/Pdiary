const diaryService = require("../service/diary.service");

//post_diary_controller
async function postDiary(req, res, next) {
    console.log("컨트롤러 들어옴");
    const user_id = req.session.user_id;

    // 세션에 user_id가 없을 경우 막음
    if (!user_id) {
        return res.status(401).json({ Status: 401, Message: '로그인 후 이용해주세요!' });
    }

    const postDiary_req = { ...req.body, user_id };
    
    console.log("데이터 들어오는거 확인", postDiary_req);
    const postDiary_data = await diaryService.postDiary(postDiary_req);
    return res.status(postDiary_data.Status).json(postDiary_data);
}


async function putDiary(req, res, next) {
    console.log("컨트롤러 들어옴");
    const putDiary_req = req.body;
    console.log("데이터 들어오는거 확인", putDiary_req);
    const putDiary_data = await diaryService.putDiary(putDiary_req);
    return res.status(putDiary_data.Status).json(putDiary_data);
}

module.exports = {
    postDiary,
    putDiary
}