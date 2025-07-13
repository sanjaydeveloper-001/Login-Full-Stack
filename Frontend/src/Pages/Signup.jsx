import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signup() {

    const navigate = useNavigate();


    const [name , setName ] = useState ();
    const [email , setEmail ] = useState ();
    const [password , setPassword ] = useState ();

    const LoginPage = import.meta.env.BASE_URL;

    const handleSubmit = (e) =>{
        e.preventDefault();
         axios.post(`${LoginPage}/register` , {name , email , password})
         .then(res => {console.log(res.data); navigate('/Login') })
         .catch(err => console.log(err)) 
    }


  return (
    <form onSubmit={handleSubmit} className='w-[400px] h-[500px] bg-blue-400 rounded-2xl p-5 flex flex-col gap-2'>

        <h1 className='text-3xl text-white mb-5'>SignUp!</h1>
        <label htmlFor="">Name:</label>
        <input onChange={(e)=> setName(e.target.value)} type="text" name="name" id="name" className='w-full h-10 border-2 outline-none pl-3' />

        <label htmlFor="email">Email :</label>
        <input onChange={(e)=> { const lowerText = e.target.value.toLowerCase(); setEmail(lowerText)}} value={email} type="email" name='email' id='email' required className='w-full h-10 border-2 outline-none pl-3'/>
        
        <label htmlFor="password">Create Password :</label>
        <input onChange={(e)=> setPassword(e.target.value)} type="password" name='password' id='password' required className='w-full h-10 border-2 outline-none pl-3'/>
        <Link to="/Login" className='w-max' > Already a user!</Link>

        <button className='w-full h-10 bg-amber-200 rounded-3xl hover:bg-amber-300'>Register</button>
    </form>
  )
}

export default Signup