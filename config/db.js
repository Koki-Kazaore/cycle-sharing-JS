require('dotenv').config(); // .envファイルの有効化

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "cycool"
});

module.exports = {
  connection: connection
};
