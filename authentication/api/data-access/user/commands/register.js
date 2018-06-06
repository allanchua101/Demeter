const baseCommand = require('../../../utilities/data-stores/dbstore-command');

/**
 * Method used for registering users.
 * 
 * @param {object} params - The parameters that would be passed to the query.
 * @param {string} [params.userId] - The ID of the user.
 * @param {string} [params.firstName] - The first name of the user.
 * @param {string} [params.lastName] - The last name of the user.
 * @param {string} [params.email] - The email of the user.
 * @param {string} [params.accessKey] - The access key of the user.
 * 
 */
let execute = function(params) {
    const input = params || {};
    const spParams = {
        p_userId: params.userId,
        p_firstName: params.firstName,
        p_lastName: params.lastName,
        p_email: params.email,
        p_accessKey: params.accessKey,
        p_isActive: true
    };

    return baseQuery.execute('user_register', spParams);
}

module.exports = {
    execute
};