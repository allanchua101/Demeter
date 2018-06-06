const baseQuery = require('../../../utilities/data-stores/dbstore-query');

/**
 * Method used for retrieving the list of users.
 * 
 * @returns {object[]} - List of registered users.
 */
let execute = () => baseQuery.getList('user_getList');

module.exports = {
    execute
};