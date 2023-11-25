const setdiaryService = require("../service/setdiary.service");

async function getDiary(req, res, next) {
    console.log("컨트롤러 들어옴");
    const getDiary_req = req.query;
    console.log("데이터 들어오는거 확인", getDiary_req);
    const getDiary_data = await setdiaryService.getDiary(getDiary_req);
    return res.status(getDiary_data.Status).json(getDiary_data);
}

module.exports = {
    getDiary
}