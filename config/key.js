const mysql = require("mysql");

module.exports = {
  pool: mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "eprescription",
    debug: false
  })
};
