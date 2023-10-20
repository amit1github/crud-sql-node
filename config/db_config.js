const mysql = require('mysql')

// local mysql db connection
const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_mysql_nodejs'
})

dbConnect.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected")
})

module.exports = dbConnect;