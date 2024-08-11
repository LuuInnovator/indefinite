const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin@123',
  database: 'myapp_db' // Thay đổi thành tên cơ sở dữ liệu của anh
});

module.exports = pool.promise();
