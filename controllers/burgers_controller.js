// Dependencies
var express = require('express');
var db = require('../models')
var router = express.Router();

// Routes
// --Index Redirect
router.get('/', function(req, res) {
    res.redirect('/index');
});

// Index page that grabs all the burgers
router.get('/index', function(req, res) {
    db.burger.findAll({}).then(function(data) {
        var hbsObject = {burgers: data}
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// Creating a new burger
router.post('/burger/create', function(req, res) {
   db.burger.create({
       burger_name: req.body.burger_name,
       devoured: req.body.devoured
   }).then(function(result){
       res.redirect('/index');
   });
});

// Update a burger
router.put('/burger/update/:id', function(req, res) {
   db.burger.update({
       devoured: req.body.devoured
   }, {
       where: {
           id: req.params.id
       },
   }).then(function(result) {
       res.redirect('/index');
   });
});

// Delete a burger
router.delete('/burger/delete/:id', function(req,res) {
    db.burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.redirect('/index');
    });
});

module.exports = router;

