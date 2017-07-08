const express = require('express');
const router = express.Router();
const data = require('../models/data.js')
const url = 'mongodb://localhost:27017/users';

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient


MongoClient.connect(url, function (err, db) {
  if (err) {
    throw err
  } else {
    console.log('Looking good!')
  }


  router.get('/', function (req, res) {
    db.collection('users').find()
    .toArray(function (err, users) {
      res.render('index', {
        users: users
      })
    })
    for (var i = 0; i < data.users.length; i++) {
      const user = data.users[i]
      db.collection('users').updateOne(
      {id: user.id},
      user,
      {upsert: true}
    )}
  })


  router.get('/:userId', function (req, res) {
    const userId = parseInt(req.params.userId)
    db.collection('users').findOne({id: userId}, function (err, user) {
      res.render('user-profile', {
        users: user
      })
    })
  })
})


module.exports = router;
