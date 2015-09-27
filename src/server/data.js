var mysql = require('mysql');

module.exports = {
    people: getPeople()
};

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'node-website-man',
    password : 'L4dd1eB0y!',
    database : 'recommenddb',
    debug    :  false
});

function getPeople() {
    return [
        { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
        { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
        { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
        { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
        { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
        { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
        { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
        { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
    ];
}

function createUser(name, email, password) {
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          
          return {"code" : 100, "status" : "Error in connection database"};
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("select * from users where email=" + email + ", pword=" + password, function(err,rows){
            connection.release();
            if(!err) {
                return rows;
            }           
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
} 

