// SQL接続確認用コード
// run "node mysql.js"

const express = require('express');
const mysql = require('mysql');
require('dotenv').config(); // .envファイルの有効化

const app = express();

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : process.env.PASSWORD,
    database: 'cycool'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
    console.log('connected as id ' + connection.threadId);
  });

  app.get('/', (req, res) => {
    connection.query(
      'SELECT * FROM users',
      (error, results) => {
        console.log(results);
        res.render('hello.ejs');
      }
    );
  });

  app.listen(3000);