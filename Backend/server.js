const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const RegisterModel = require("./models/SignupModel");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err));

app.post("/Login" , (req, res) => {
    const {email , password} = req.body;
    RegisterModel.findOne({email : email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("Password is wrong!");
            }
        }
        else{
            res.json("User not Registered !")
        }
    })
})

app.post("/findName" , (req , res) => {
    const email = req.body;
    RegisterModel.findOne({email : email})
    .then(user => {
        if(user){
            res.json(user.name);
        }
        else{
            res.json("User Not Found!");
        }
    })
})

app.post("/register", (req, res) => {

  RegisterModel.create(req.body)
    .then((register) =>{res.json(register) ; console.log("Coming!") })
    .catch((err) => res.json(err));
});

app.listen(8000, () => {
  console.log("Server is running !");
});
