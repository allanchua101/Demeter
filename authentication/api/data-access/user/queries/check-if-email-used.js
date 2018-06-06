const query = require('../../../utilities/data-stores/dbstore-query');

/**
 * Method used for checking if an email is already in use.
 * 
 * @param {object} params - The parameters that would be passed to the query.
 * @param {string} [params.email] - The email address that would be validated.
 * 
 * @returns {boolean} - Flag that indicates whether the email is already used / taken.
 */
let execute = function(params) {
    const input = params || {};
    const spParams = {
        p_email: params.email
    };
    
    return query.getSingle('user_checkIfEmailUsed', spParams);
}

module.exports = {
    execute
};