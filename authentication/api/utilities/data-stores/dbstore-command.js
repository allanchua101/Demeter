const dbstore = require('./store-connector');
const dbstoreBase = require('./dbstore-base');

/**
 * Method used for executing a stored procedure without a return value.
 * 
 * @param {object} params - The parameter object that defines behavior of execution.
 * @param {String} params.spName - The name of the stored procedure that would be used to retrieve target set.
 * @param {object} [params.params] - The parameter values that needs to be passed to DB function.
 * @param {Function} [params.masker] - The function that would be used to mask the result set.
 * @param {Function} [params.onSuccess] - The callback that would be invoked if any mutations 
 *                                        needs to be performed on the query result.
 * @param {Function} [params.onError] - The callback that would be invoked if any process needs to be 
 *                                      performed on the response data.
 */
let execute = (params) => dbstoreBase.executeQuery(dbstore.func, params);

module.exports = {
    execute
};