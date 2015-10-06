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

exports.getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};