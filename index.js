const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'happymak.mysql.tools',
  user: 'happymak_petsearch',
  password: ';2xK94Us(k',
  database: 'happymak_petsearch',
});

pool.getConnection((err, connection) => {
  if (err) throw error;
  const query = 'CREATE TABLE testPool(Id INT,Age INT,FirstName VARCHAR(20),LastName VARCHAR(20))';

  connection.query(query, function (err, results, fields) {
    console.log(results);
    connection.release();
    if (err) {
      connection.destroy();
      throw error;
    }
  });
});
