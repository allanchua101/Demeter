const postgresp = require("pg-promise")({promiseLib: Promise});
const config = require("config");

// Defining the connection
const connectionString = "postgres://" + config.database.user + ":" + config.database.password +
  "@" + config.database.host + ":" + config.database.port + "/" + config.database.db;

const db = postgresp(connectionString);
console.log("Database connected on port " + config.database.port);

module.exports = db;