import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signup({ setCreateProfile }) {

    const navigate = useNavigate();


    const [name , setName ] = useState ("");
    const [email , setEmail ] = useState ("");
    const [password , setPassword ] = useState ("");
    const [error , setError] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password.length < 8){
          setError('Password should contain atlease 8 char !');
        }
        else{
         axios.post(`https://login-full-stack-d2bl.onrender.com/register` , {name , email , password})
         .then(res => {console.log(res.data); setCreateProfile(true) ; navigate('/Login')})
         .catch(err => {console.log(err) }) 
        }
    }


  return (
    <form onSubmit={handleSubmit} className='w-[400px] h-[500px] bg-blue-400 rounded-2xl p-5 flex flex-col gap-2'>

        <div className='mb-3'>
          <h1 className='text-3xl text-white '>SignUp!</h1>
          {error ? <p className='text-red-600'>{error}</p> : ''}

        </div>
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