const mysql = require("mysql2");

const connection = mysql.createConnectio({
    host: "localhost",
    database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;