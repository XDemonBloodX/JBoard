// TODO Setup production settings once the API is done
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DB_URL,
    port: process.env.DB_PRT,
    user: process.env.DB_USR,
    password: process.env.DB_PWD,
    database: process.env.DB_DBN,
    multipleStatements: true
});

db.connect((err) => {
    if (err) throw err;
    else console.log(`Successfully connected to the database as ${db.user}`);
});

module.exports = db;