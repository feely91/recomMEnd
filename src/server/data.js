var db = require('./db');

module.exports.createUser = function(name, email, pass, callback) {
    db.createUser(name, email, pass, function(err, data) {
        callback(err, data);
    });
};

module.exports.updateUser = function(id, name, email, pass, callback) {
    db.updateUser(id, name, email, pass, function(err, data) {
       callback(err, data); 
    });
};

module.exports.getUser = function(id, callback) {
    db.getUser(id, function(err, data) {
        callback(err, data);
    });
};
