const dbstore = require('./store-connector');
const NO_DATA_RETURNED = 'No data returned from the query.';

let executeIfProvided = (handler, input) => handler ? handler(input) : input;

let buildPromise = strategy => new Promise(strategy);

let handleOKResponse = (queryResult, resolver, onSuccess) => {
    let result = queryResult || null;

    resolver(executeIfProvided(onSuccess, result));
};

let handleDbError = (err, resolver, rejector, onSuccess, onError) => {
    if (err.message === NO_DATA_RETURNED)
        resolver(executeIfProvided(onSuccess, null));
    else
        rejector(executeIfProvided(onError, err));
}

let executeQuery = (strategy, input) => {
    return buildPromise((resolve, reject) => {
        strategy(input.query, input.params, input.masker)
            .then(result => handleOKResponse(result, resolve, input.onSuccess))
            .catch(err => handleDbError(err, resolve, reject, input.onSuccess, input.onError));
    });
};

/**
 * Method used for retrieving single object / value from the data store.
 * 
 * @param {object} params - The parameter object that defines behavior of execution.
 * @param {String} params.query - The SQL query statement that would be used to retrieve target data.
 * @param {object} [params.params] - The parameter values that needs to be passed to DB function.
 * @param {Function} [params.masker] - The function that would be used to mask the result set.
 * @param {Function} [params.onSuccess] - The callback that would be invoked if any mutations 
 *                                        needs to be performed on the query result.
 * @param {Function} [params.onError] - The callback that would be invoked if any process needs to be 
 *                                      performed on the response data.
 */
let getSingle = (params) => executeQuery(dbstore.one, params);

/**
 * Method used for retrieving a collection / value from the data store.
 * 
 * @param {object} params - The parameter object that defines behavior of execution.
 * @param {String} params.query - The SQL query statement that would be used to retrieve target data.
 * @param {object} [params.params] - The parameter values that needs to be passed to DB function.
 * @param {Function} [params.masker] - The function that would be used to mask the result set.
 * @param {Function} [params.onSuccess] - The callback that would be invoked if any mutations 
 *                                        needs to be performed on the query result.
 * @param {Function} [params.onError] - The callback that would be invoked if any process needs to be 
 *                                      performed on the response data.
 */
let getList = (params) => executeQuery(dbstore.many, params);

module.exports = {
    getSingle,
    getList
};