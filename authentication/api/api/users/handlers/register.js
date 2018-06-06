const registerService = require('../../../business-layer/user/commands/register');

function handler(req, res, next) {
    const params = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        accessKey: req.body.accessKey
    };

    registerService.execute(params)
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