var db = require('./db');

module.exports.createUser = function createUser(name, email, pass, callback) {
    db.createUser(name, email, pass, function(err, data) {
        callback(err, data);
    });

};

module.exports.updateUser = function updateUser(id, name, email, pass, callback) {
    db.updateUser(id, name, email, pass, function(err, data) {
       callback(err, data); 
    });

}
