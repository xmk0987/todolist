const mysql = require('mysql2');


const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.ROOT,
  database: process.env.SQLDB,
  password: process.env.SQLPASS,
});

module.exports = pool.promise();