// const Pool = require('pg').Pool;

// const db = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'rpgvitroo',
//   password: 'Simple@gr0!',
//   port: 5432,
// });

const pgp = require('pg-promise')();

const db = pgp({
  user: 'postgres',
  host: 'localhost',
  database: 'rpgvitroo',
  password: 'Simple@gr0!',
  port: 5432
});

module.exports = db;