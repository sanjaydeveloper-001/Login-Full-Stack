const mongoose =require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const ResiterModel = mongoose.model("registers" , RegisterSchema)
module.exports = ResiterModel
