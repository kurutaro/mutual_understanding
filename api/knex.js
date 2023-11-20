const knex = require('knex');
const config = require('./db/knexfile');
const database = knex(config[process.env.NODE_ENV]);

module.exports = database;
