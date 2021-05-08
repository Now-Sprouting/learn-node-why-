const mysql = require('mysql2')

const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '$Ding15542456716',
  database: 'coderhub',
  connectionLimit : 10/* 最多会建立几个连接 */
});

const statement = `SELECT * FROM products WHERE price > ? AND score > ?`

connections.promise().execute(statement, [6000, 7]).then(([results]) => {
    console.log(results);
});

