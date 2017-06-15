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
  res.render('templates/index', {
    layout: '../static/templates/layout.ejs',
    err: '系统错误'
  });
})


router.get('/222', function(req, res) {
  res.render('templates/222', {
    layout: '../static/templates/layout.ejs',
    err: '系统错误'
  });
})


module.exports = router;
