const baseCommand = require('../../../utilities/data-stores/dbstore-command');

/**
 * Method used for activating user records.
 * 
 * @param {object} params - The parameters that would be passed to the query.
 * @param {string} [params.userId] - The ID of the user to be activated.
 */
let execute = function(params) {
    const input = params || {};
    const spParams = {
        p_userId: params.userId
    };

    return baseQuery.execute('user_activate', spParams);
}

module.exports = {
    execute
};