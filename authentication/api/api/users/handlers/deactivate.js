const deactivateService = require('../../../business-layer/user/commands/deactivate');

function handler(req, res, next) {
    const params = {
        userId: req.body.id
    };

    deactivateService.execute(params)
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