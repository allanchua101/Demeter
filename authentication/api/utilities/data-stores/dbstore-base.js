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

let executeQuery = (input) => {
    return buildPromise((resolve, reject) => {
        strategy(input.query, input.params, input.masker)
            .then(result => handleOKResponse(result, resolve, input.onSuccess))
            .catch(err => handleDbError(err, resolve, reject, input.onSuccess, input.onError));
    });
};

module.exports = {
    executeQuery: executeQuery
};