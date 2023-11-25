const db = require('../config/db')
const logger = require('../config/logger')

//get_main_dao

async function postDiary(req) {
    console.log(req.user_id);
    return new Promise((resolve, reject) => {
        var queryData = `insert into diary (user_id, diary_title, diary_category, diary_theme, diary_private, diary_month, diary_day, diary_today, diary_weather, diary_content, diary_img) 
        values (${req.user_id}, '${req.diary_title}', ${req.diary_category}, ${req.diary_theme}, ${req.diary_private}, '${req.diary_month}', 
        '${req.diary_day}', '${req.diary_today}', ${req.diary_weather}, '${req.diary_content}', '${req.diary_img}')`;
        console.log(queryData),
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

async function putDiary(req) {
    console.log(req.diary_id);
    return new Promise((resolve, reject) => {
        var queryData = `update diary
        set diary_title='${req.diary_title}', diary_category=${req.diary_category}, diary_theme=${req.diary_theme},
        diary_private=${req.diary_private}, diary_month='${req.diary_month}', diary_day='${req.diary_day}', diary_today='${req.diary_today}', diary_weather=${req.diary_weather}, diary_content='${req.diary_content}', diary_img='${req.diary_img}' 
        where diary_id=${req.diary_id} `;
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
    postDiary,
    putDiary
}