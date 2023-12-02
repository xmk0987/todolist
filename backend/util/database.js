const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.ROOT,
  database: process.env.SQLDB,
  password: process.env.SQLPASS,
  port: process.env.SQLPORT
});


module.exports = connection.promise();
