var db = require('./db');

module.exports.people = function getPeople(callback) {
    // return [
    //     { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
    //     { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
    //     { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
    //     { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
    //     { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
    //     { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
    //     { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
    //     { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
    // ];

    createUser("adam", "adam@adam.test", "testPass", function(err, data) {
        callback(err, data);
    });

};


function createUser(name, email, password, callback) {  
    db.getConnection(function (err, connection) {
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

        console.log('This shouldn\'t be called');

        connection.on('error', function (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
    
};

