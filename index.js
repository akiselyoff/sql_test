const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'happymak.mysql.tools',
  user: 'happymak_petsearch',
  password: ';2xK94Us(k',
  database: 'happymak_petsearch',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end(err =>
  err ? console.log(`Connection end with error: ${err}`) : console.log(`Connection successfully end`)
);
