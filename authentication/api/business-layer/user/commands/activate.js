const activateCommand = require('../../../data-access/user/commands/activate');

/**
 * Method used for activating user records.
 * 
 * @param {object} params - The parameters that would be passed to the query.
 * @param {string} [params.userId] - The ID of the user to be activated.
 */
let execute = function(params) {
    const input = params || {};

    return activateCommand.execute(input);
}

module.exports = {
    execute
};