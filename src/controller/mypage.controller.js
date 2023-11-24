const mypageService = require("../service/mypage.service");

//get_main_controller
async function getMyDiary(req, res, next) {
    console.log("컨트롤러 들어옴");
    const getMyDiary_req = req.query;
    console.log("데이터 들어오는거 확인", getMyDiary_req);
    const getMyDiary_data = await mypageService.getMyDiary(getMyDiary_req);
    return res.status(getMyDiary_data.Status).json(getMyDiary_data);
}

async function updateData(req, res) {
    console.log("컨트롤러 들어옴");
    console.log("데이터 들어오는거 확인", req);
    var updateReq = {
        user_webpw : req.user_webpw,
        user_nickname : req.user_nickname,
        user_email : req.user_email,
        user_birthday : req.user_birthday,
        user_id : 2
    }
    const update_data = await mypageService.updateData(updateReq);
    return res.redirect("/mypage");
}

module.exports = {
    getMyDiary,
    updateData
}