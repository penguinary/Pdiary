const mypageService = require("../service/mypage.service");

//get_main_controller
async function getMyDiary(req, res, next) {
    console.log("컨트롤러 들어옴");
    const getMyDiary_req = req.query;
    console.log("데이터 들어오는거 확인", getMyDiary_req);
    const getMyDiary_data = await mypageService.getMyDiary(getMyDiary_req);
    return res.status(getMyDiary_data.Status).json(getMyDiary_data);
}

module.exports = {
    getMyDiary
}