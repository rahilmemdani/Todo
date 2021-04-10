const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'9820025048',
    database:'todo'
})

mysqlConnection.connect(function(err){
    if(!err){
        console.log('Connected');
    }else{
        console.log('Unsuccessful');
    }
})



module.exports = mysqlConnection;