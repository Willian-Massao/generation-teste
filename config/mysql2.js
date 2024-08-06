const mysql = require('mysql2');

const configuration = {
    debug: true,
    port: 3306,
    mysql: {
        host: '192.168.15.6',
        user: 'root',
        password: 'Pg78Q8bH#w£gbigy',//71nM]8FP"bE<
        database: 'escola',
    }
}

const pool = mysql.createPool({
  host: configuration.mysql.host,
  user: configuration.mysql.user,
  password: configuration.mysql.password,
  database: configuration.mysql.database,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

module.exports = pool.promise();