'use strict';
var mysql = require('mysql');
var pool = mysql.createPool({
            connectionLimit: 100, //important
            host: 'localhost',
            user: 'node-website-man',
            password: 'L4dd13B0y!',
            database: 'recommenddb',
            debug: false
        });

exports.createUser = 

function createUser(name, email, password, callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log('ERROR ' + err);
            
            connection.release();
            return { "code": 100, "status": "Error in connection database" };
        }

        console.log('connected as id ' + connection.threadId);

        connection.query("select * from users where id=1", function (err, rows) {
            connection.release();
            
            if(err){
                console.log('ERROR on Query = ' + err);
                callback(err, null);
            }
            
            if (!err) {
                console.log('USER QUERY = ' + rows[0].name );
                callback(null, JSON.stringify(rows[0]));
            }
        });
        
    }); 
}