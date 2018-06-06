const getAllQuery = require('../../../data-access/user/queries/get-list');

/**
 * Method used for retrieving the list of users.
 * 
 * @returns {object[]} - List of registered users.
 */
let execute = () => getAllQuery.execute();

module.exports = {
    execute
};