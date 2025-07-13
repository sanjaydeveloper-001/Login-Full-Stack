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
            res.json("User not Registered")
        }
    })
})

app.post("/register", (req, res) => {
  RegisterModel.create(req.body)
    .then((register) => res.json(register))
    .catch((err) => res.json(err));
});

app.listen(process.env.PORT, () => {
  console.log("Server is running !");
});
