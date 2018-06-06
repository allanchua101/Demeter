const postgresp = require("pg-promise")({ promiseLib: Promise });
const { user, password, host, port, db } = require("config").database;

// Define connection object
const connector = postgresp(`postgres://${user}:${password}@${host}:${port}/${db}`);

console.log(`Database connected on port ${port}`);

module.exports = connector;