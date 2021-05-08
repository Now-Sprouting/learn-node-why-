const mysql = require('mysql2')

// ! 1.创建数据库连接
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '$Ding15542456716',
  database: 'coderhub',
  connectionLimit : 10/* 最多会建立几个连接 */
});

// ! 2.执行sql语句
const statement = `SELECT * FROM products WHERE price > ? AND score > ?`

connections.execute(statement, [6000, 7], (err, results, fields) => {
    console.log(results);
});

