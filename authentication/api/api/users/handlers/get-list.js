const getListService = require('../../../business-layer/user/queries/get-list');

function handler(req, res, next) {
    getListService.execute()
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (error) {
            res.status(500).json({
                error: error
            });
        });
}

module.exports = {
    execute: handler
};