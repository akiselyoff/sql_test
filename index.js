const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mysql = require('mysql');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const { PORT = 3000, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

//Connect
db.connect(err => {
  if (err) throw error;
  console.log('MySQL connected...');
});

//Create DB
//Use for create new db if databse option in createConnection was absent

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
app.get('/', (req, res) => {
  console.log('Home page is ok');
  res.send('Home Page');
});

app.get('/create_table', (req, res) => {
  let sql =
    'CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30), lastname VARCHAR(30), age INT)';

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(results);
    res.send('Table created...');
  });
});

app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT}...`);
});
