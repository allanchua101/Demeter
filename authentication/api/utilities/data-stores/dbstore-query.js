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

let executeQuery = (strategy, query, onSuccess, onError) => {
    return buildPromise((resolve, reject) => {
        strategy(query)
            .then(result => handleOKResponse(result, resolve, onSuccess))
            .catch(err => handleDbError(err, resolve, reject, onSuccess, onError));
    });
};

/**
 * Method used for retrieving single object / value from the data store.
 * 
 * @param {String} query - The SQL query statement that would be used to retrieve target data.
 * @param {Function} onSuccess - An optional callback that would be invoked if any mutations 
 *                               needs to be performed on the query result.
 * @param {Function} onError - An optional callback that would be invoked if any process needs to be
 *                             performed on the response data.
 */
let getSingle = (query, onSuccess, onError) => executeQuery(dbstore.one, query, onSuccess, onError);

/**
 * Method used for retrieving a collection from the data store.
 * 
 * @param {String} query - The SQL query statement that would be used to retrieve target collection.
 * @param {Function} onSuccess - An optional callback that would be invoked if any mutations 
 *                               needs to be performed on the query result.
 * @param {Function} onError - An optional callback that would be invoked if any process needs to be
 *                             performed on the response data.
 */
let getList = (query, onSuccess, onError) => executeQuery(dbstore.many, query, onSuccess, onError);

module.exports = {
    getSingle,
    getList
};