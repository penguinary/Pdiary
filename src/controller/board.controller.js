const boardService = require("../service/board.service");

async function getBoard(req, res, next) {
    console.log("컨트롤러 들어옴");
    const getBoard_req = req.query;
    console.log("데이터 들어오는거 확인", getBoard_req);
    const getBoard_data = await boardService.getBoard(getBoard_req);
    return res.status(getBoard_data.Status).json(getBoard_data);
}

module.exports = {
    getBoard
}