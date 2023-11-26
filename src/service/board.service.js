const boardDao = require('../dao/board.dao');

async function getBoard(getBoard_req) {
    console.log("서비스 들어옴");
    try {
        if(!getBoard_req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const getBoard_data = await boardDao.getBoard(getBoard_req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : getBoard_data
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
    getBoard
}