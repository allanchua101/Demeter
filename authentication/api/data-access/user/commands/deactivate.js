const baseCommand = require('../../../utilities/data-stores/dbstore-command');

/**
 * Method used for deactivating user records.
 * 
 * @param {object} params - The parameters that would be passed to the query.
 * @param {string} [params.userId] - The ID of the user to be deactivated.
 */
let execute = function(params) {
    const input = params || {};
    const spParams = {
        p_userId: params.userId
    };

    return baseQuery.execute('user_deactivate', spParams);
}

module.exports = {
    execute
};