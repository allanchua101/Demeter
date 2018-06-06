const registerCommand = require('../../../data-access/user/commands/register');
const guidFactory = require('../../../utilities/encryption/guid-factory');
const passwordHasher = require('../../../utilities/encryption/hasher');
const PASSWORD_SALT = 'Demeter Rocks';

/**
 * Method used for registering users.
 * 
 * @param {object} params - The parameters that would be passed to the query.
 * @param {string} [params.firstName] - The first name of the user.
 * @param {string} [params.lastName] - The last name of the user.
 * @param {string} [params.email] - The email of the user.
 * @param {string} [params.accessKey] - The access key of the user.
 * 
 */
let execute = function(params) {
    const input = params || {};
    const commandParams = {
        userId: guidFactory.execute(),
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        accessKey: passwordHasher.execute(input.accessKey, PASSWORD_SALT),
        p_isActive: true
    };

    return registerCommand.execute(commandParams);
}

module.exports = {
    execute
};