var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.post('/createUser', createUser);
router.post('/updateUser/:id', updateUser);
router.get('/getUser/:id', getUser);

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

    console.log('SERVER ROUTES.JS RECEIVED ID Path Param = ' + id);

    data.updateUser(id, req.body.name, req.body.email, req.body.pword, function(err, results){
       if(err) {
           console.log('SERVER ROUTES.JS ERROR = ' + err);
           res.status(507).send('Problem updating user');
       } else {
           console.log('SERVER ROUTES.JS SUCCESS = ' + results);
           res.status(200).send(JSON.stringify(results));
       }
    });
}

function getUser(req, res, next) {
    var id = req.params.id;

    console.log('RECEIVED ID Path Param = ' + id);

    data.getUser(id, function(err, results) {
       if(err){
           four0four.send404(req, res, 'person ' + id + ' not found');
       } else {
           res.status(200).send(results);
       }
    });

}

