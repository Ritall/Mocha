var express = require('express');
var router = express.Router();

/* Mock User */
var Users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(Users);
});

/* GET user . */
router.get('/:name', function(req, res, next) {
  for(var i=0;i<Users.length;i++){
      if(Users[i].name === req.params.name){
        res.status(200).json(Users[i]);
        return;
      }
  }
  res.status(404).send('User not found!');
});

router.post('/', function(req, res, next){
  Users.push(req.body);
  res.status(201).end();
});

router.delete('/:name', function(req, res, next){
  for(var i=0; i < Users.length; i++) {
    var obj = Users[i];

    if(obj.name === req.params.name) {
        Users.splice(i, 1);
    }
  }
  res.status(200).end();
});

router.delete('/', function(req, res, next){
  Users = [];
  res.status(200).end();
});

module.exports = router;
