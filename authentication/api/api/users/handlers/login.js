const loginService = require('../../../business-layer/user/queries/validate-creds');

function handler(req, res, next) {
    const params = {
        email: req.body.email,
        accessKey: req.body.accessKey
    };

    loginService.execute(params)
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