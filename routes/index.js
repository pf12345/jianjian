/*global module*/
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var _ = require('underscore');
var request = require('request');
var fs = require('fs');
var multiparty = require('multiparty');
var config = require('./../config/config.json');

var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

// Connection URL
var url = config.dbInfo.url;

router.get('/', function(req, res) {
    res.send('ok')
})

module.exports = router;
