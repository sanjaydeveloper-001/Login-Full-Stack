const mongoose =require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:String
})

const RegisterModel = mongoose.model("registers", RegisterSchema)
module.exports = RegisterModel

