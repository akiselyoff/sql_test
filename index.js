const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'happymak.mysql.tools',
  user: 'happymak_petsearch',
  password: ';2xK94Us(k',
  database: 'happymak_petsearch',
});

//Connect
db.connect(err => {
  if (err) throw error;
  console.log('MySQL connected...');
});

//Create DB
//Use when databse option in createConnection was absent

// app.get('/createdb', (req, res) => {
//   let sql = 'CREATE DATABASE TestMySQL';

//   db.query(sql, (err, results) => {
//     if (err) {
//       throw error;
//     }
//     console.log(results);
//     res.send('Database created...');
//   });
// });

// app.get('/create_table', (req, res) => {
//   let sql =
//     'CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY_KEY, firstname VARCHAR(30), lastname VARCHAR(30), age INT';

//   db.query(sql, (err, results) => {
//     if (err) {
//       throw error;
//     }
//     console.log(results);
//     res.send('Table created...');
//   });
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT}...`);
});
