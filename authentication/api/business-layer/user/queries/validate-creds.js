const validateCredentialsQuery = require('../../../data-access/user/queries/validate-creds');
const passwordHasher = require('../../../utilities/encryption/hasher');

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
    const queryParams = {
        email: input.email,
        accessKey: passwordHasher.execute(input.accessKey)
    };
    
    return validateCredentialsQuery.execute(queryParams);
}

module.exports = {
    execute
};