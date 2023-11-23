const db = require('../config/db')
const logger = require('../config/logger')

//get_main_dao
async function getMain(req) {
    console.log("dao 들어옴");
    return new Promise((reslove, reject) => {
        var queryData = `select user_nickname from user
        where ${user_id} = ${getMain_req.user_id}`;
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