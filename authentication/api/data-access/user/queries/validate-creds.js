const baseQuery = require('../../../utilities/data-stores/dbstore-query');

/**
 * Method used for validating user credentials.
 * 
 * @param {object} params - The parameters that would be passed to the query.
 * @param {string} [params.email] - The email address to be validated.
 * @param {string} [params.accessKey] - The access key to be validated.
 * 
 * @returns {boolean} - Flag that indicates whether the user is authorized to login.
 */
let execute = function(params) {
    const input = params || {};
    const spParams = {
        p_email: params.email,
        p_accessKey: params.accessKey
    };
    
    return baseQuery.getSingle('user_validateCredentials', spParams);
}

module.exports = {
    execute
};