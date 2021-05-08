// !预处理语句优点
// 1.提高性能
// 2.防止sql注入

const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '$Ding15542456716',
  database: 'coderhub'
});

const statement = `SELECT * FROM products WHERE price > ? AND score > ?`

connection.execute(statement, [6000, 7], (err, results) => {
    console.log(results);
})

