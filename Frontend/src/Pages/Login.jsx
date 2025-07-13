import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://login-full-stack-d2bl.onrender.com/Login' , {email , password})
    .then(res => { 
      console.log(res);
      if(res.data === "Success") {
        navigate("/");
      }

    })
    .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit} className='w-[400px] h-[500px] bg-blue-400 rounded-2xl p-5 flex flex-col gap-2'>

        <h1 className='text-3xl text-white mb-5'>Login Here !</h1>

        <label htmlFor="mail">Email :</label>
        <input type="email" onChange={(e) => { const lowerText = e.target.value.toLowerCase(); setEmail(lowerText)}} value={email} required className='w-full h-10 border-2 outline-none pl-3'/>

        <label htmlFor="password">Password :</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} required className='w-full h-10 border-2 outline-none pl-3'/>

        <Link to="/Signup" className='w-max' > Create New!</Link>

        <button className='w-full h-10 bg-amber-200 rounded-3xl hover:bg-amber-300'>Login</button>
    </form>
  )
}

export default Login