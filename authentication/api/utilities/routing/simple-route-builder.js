
function execute(expressRouter, url, handler) {
    expressRouter.post(url, handler);
}

module.exports = {
    execute
};