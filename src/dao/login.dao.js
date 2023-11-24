const db = require('../config/db')
const logger = require('../config/logger')

//get_main_dao
async function signIn(req) {
    console.log(req.user_webid, req.user_webpw);
    return new Promise((resolve, reject) => {
        var queryData = `select user_nickname, user_id from user
        where user_webid = '${req.user_webid}' and user_webpw = '${req.user_webpw}'`;
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
            resolve(db_data)
        })
    })
}

async function signUp(req) {
    return new Promise((resolve, reject) => {
        var queryData = `insert into user(user_webid, user_webpw, user_nickname, user_email, user_birthday) 
        values('${req.user_webid}', '${req.user_webpw}', '${req.user_nickname}', '${req.user_email}', '${req.user_birthday}')`;
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
            resolve(db_data)
        })
    })
}

module.exports = {
    signIn,
    signUp
}