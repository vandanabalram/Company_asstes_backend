const mongoose = require('mongoose');
const UserData =require('../Model/MiscellaneousDesktopModel');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
var isAuth=require('../Middleware/isAuth')
    

exports.get_a_data = function(req, res) {
  UserData.find({}, function(err, Tasks3) {
  if (err)
    res.send(err);
    res.json(Tasks3);
    console.log(Tasks3)
  });
};

exports.update_a_task = function(req, res)
{
  console.log(req.body)
  var User = new UserData(req.body);
  User.save({},function(err,data) {
    console.log("added")
  if (err)
  res.send(err);
  res.json(data);
  });
};

exports.delete_a_task = function(req, res) {
  UserData.remove({_id: req.params.id}, function(err, Tasks3) {
  if (err)
  res.send(err);
  res.json({ message: 'Task successfully deleted' });
  });
};

exports.read_a_task = function(req, res) 
{
  UserData.findById(req.params.taskId, function(err, Tasks3) {
  if (err)
  res.send(err);
  res.json(Tasks3);
  });
  };







