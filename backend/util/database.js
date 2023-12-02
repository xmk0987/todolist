const mysql = require('mysql2');


const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.ROOT,
  database: process.env.SQLDB,
  password: process.env.SQLPASS,
});

const checkConnection = async () => {
  const promisePool = pool.promise();

  try {
    await promisePool.ping();
    console.log('MySQL connection is active.');
  } catch (error) {
    console.error('Error pinging MySQL server:', error);
  } finally {
    promisePool.end(); 
  }
};

module.exports = { pool, checkConnection };
