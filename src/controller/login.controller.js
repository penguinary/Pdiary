const loginService = require("../service/login.service");

//get_main_controller
async function getMain(req, res, next) {
    const getMain_req = req.query;
    const getMain_data = await loginService.getMain(getMain_req);
    return res.status(getMain_data.Status).json(getMain_data);
}