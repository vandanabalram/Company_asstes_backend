const mongoose = require('mongoose');
const UserData =require('../Model/MiscellaneousModel');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
var isAuth=require('../Middleware/isAuth')
    

exports.get_a_data = function(req, res) {
  UserData.find({}, function(err, task3) {
  if (err)
    res.send(err);
    res.json(task3);
  });
};



exports.update_a_task = function(req, res)
{
  var User = new UserData(req.body);
  User.save({},function(err, data) {
  if (err)
  res.send(err);
  res.json(data);
  });
};