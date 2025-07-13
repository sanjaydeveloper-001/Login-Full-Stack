const mongoose =require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const ResiterModel = mongoose.model("Users" , RegisterSchema)
module.exports = ResiterModel
