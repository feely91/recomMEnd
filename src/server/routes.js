var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.post('/createUser', createUser);
router.post('/updateUser/:id', updateUser);
router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function createUser(req, res, next) {
    
    console.log('RECEIVED NAME = ' + req.body.name);
    console.log('RECEIVED EMAIL = ' + req.body.email);
    console.log('RECEIVED PASS = ' + req.body.pass);
    
    data.createUser(req.body.name, req.body.email, req.body.pass, function(err, results){
        if(err){
            res.status(507).send('Problem creating user');
        } else {
            res.status(200).send(results);
        }  
    });
}

function updateUser(req, res, next) {
    var id = req.params.id;
    
    console.log('RECEIVED ID Path Param = ' + id);
    
    data.updateUser(id, req.body.name, req.body.email, req.body.pass, function(err, results){
       if(err) {
           res.status(507).send('Problem updating user');
       } else {
           res.status(200).send(results);
       }
    });
}

function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.people.filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}
