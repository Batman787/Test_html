const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "database-2.c5nd1yeb0nlg.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "London1_2",
    port: "3306",
});

connection.connect(function(err) {
    if (err){
        console.error('Database connection failed: ' + err.stack)
        return
    }
    console.log('Connected to database');
});
connection.end()