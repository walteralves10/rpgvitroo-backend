// const Pool = require('pg').Pool;

// const db = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'rpgvitroo',
//   password: 'Simple@gr0!',
//   port: 5432,
// });

const pgp = require('pg-promise')();

const db_desenvolvimento = pgp({
  user: 'postgres',
  host: 'localhost',
  database: 'rpgvitroo',
  password: 'Simple@gr0!',
  port: 5432
});

// const db_producao = pgp({
//   user: 'rritulzmldxllx',
//   host: 'ec2-44-196-174-238.compute-1.amazonaws.com',
//   database: 'd6q4hdea1k0b0m',
//   password: '2afd38aca5f748f5f934141bf2bf35eadf2efc8f3b28ebe749118e267ed31b54',
//   port: 5432,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

//const db = pgp('postgres://rritulzmldxllx:2afd38aca5f748f5f934141bf2bf35eadf2efc8f3b28ebe749118e267ed31b54@ec2-44-196-174-238.compute-1.amazonaws.com:5432/d6q4hdea1k0b0m');

module.exports = db_desenvolvimento;