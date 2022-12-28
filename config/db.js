require('dotenv').config(); // .envファイルの有効化

// mysqlパッケージを読み込み
// Load mysql package
var mysql = require("mysql");
// 接続情報を変数connectionに代入
// assign connection infomation to the variable connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "cycool"
});

module.exports = {
  connection: connection
};
