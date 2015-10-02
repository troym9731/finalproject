var express = require('express');
var router = express.Router();
var db = require('../db');

// GET users
router.get('/', function(req, res) {
  var userCollection = db.get().collection('users').find();
});

module.exports = router;