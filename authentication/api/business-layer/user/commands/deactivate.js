const deactivateCommand = require('../../../data-access/user/commands/deactivate');

/**
 * Method used for deactivating user records.
 * 
 * @param {object} params - The parameters that would be passed to the query.
 * @param {string} [params.userId] - The ID of the user to be deactivated.
 */
let execute = function(params) {
    const input = params || {};

    return deactivateCommand.execute(input);
}

module.exports = {
    execute
};