const db = require('../config/db')
const logger = require('../config/logger')

//get_main_dao
async function getMyDiary(req) {
    console.log(req.user_id);
    return new Promise((resolve, reject) => {
        var queryData = `select diary_id, diary_title, diary_date, diary_category, diary_private from diary
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

module.exports = {
    getMyDiary
}