const db = require('../config/db')
const logger = require('../config/logger')

//get_main_dao
async function getMain(req) {
    console.log(req.user_id);
    return new Promise((reslove, reject) => {
        var queryData = `select user_nickname from user
        where user_id = ${req.user_id}`;
        console.log(queryData);
        db.query(queryData, (error, db_data) => {
            if(error) {
                logger.error(
                    'DB error [user]' +
                    '\n \t' + queryData +
                    '\n \t' + error
                )
                reject("DB ERR")
            }
            reslove(db_data)
        })
    })
}

module.exports = {
    getMain
}