const usr = require('../models/user')
const mongoose = require('mongoose')
function create(req,res,next){
  let name = req.body.name;
  let email = req.body.email;
  let paswword = req.body.password;
  let usr = new usr({
    name,
    email,
    password
  })
  usr.save().then((data)=>{
    res.send(data)
  })
}
module.exports.create = create