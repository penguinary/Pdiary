const db = require('../config/db')
const logger = require('../config/logger')

//get_main_dao
async function getMyDiary(req) {
    console.log(req.user_id);
    return new Promise((resolve, reject) => {
        var queryData = `select user_nickname, user_webid, user_email, user_birthday
        from user
        where user_id = ${req.user_id}`;
        console.log(queryData);
        db.query(queryData, (error, db_data) => {
            if(error) {
                logger.error(
                    'DB error [diary]' +
                    '\n \t' + queryData +
                    '\n \t' + error
                )
                reject("DB ERR")
            }
            resolve(db_data)
        })
    })
}

async function updateData(req) {
    console.log("dao 들어옴", req)
    return new Promise((resolve, reject) => {
        var queryData = `update user set user_webpw = '${req.user_webpw}',
        user_nickname='${req.user_nickname}', user_email='${req.user_email}',
        user_birthday='${req.user_birthday}' where user_id = ${req.user_id}`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                logger.error(
                    'DB error [diary]' +
                    '\n \t' + queryData +
                    '\n \t' + error
                )
                reject("DB ERR")
            }
            resolve(db_data)
        })
    })
}

module.exports = {
    getMyDiary,
    updateData
}