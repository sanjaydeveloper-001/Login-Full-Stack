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
        setError(null);
        e.preventDefault();
        if(password.length < 8){
          setError('Password should contain atlease 8 char !');
        }
        else{
         axios.post(`https://login-full-stack-d2bl.onrender.com/register` , {name , email , password})
         .then(res => {console.log(res); 
          if(res.data.code === 11000 ){
            setError("Email Already Registered !");
          }
          else{
            setCreateProfile(true); 
            navigate('/Login')
          }
         })
         .catch(err => {console.log(err); }) 
        }
    }


  return (
    <form onSubmit={handleSubmit} className='w-[400px] h-max bg-white/8 rounded-4xl p-5 flex flex-col gap-2 transition-all duration-300 hover:shadow-[0_0_40px_green]'>

        <div className='mb-3'>
          <h1 className='text-3xl text-white '>SignUp!</h1>
          {error ? <p className='text-green-400'>{error}</p> : ''}

        </div>
        <label className="text-gray-50/30" htmlFor="">Name:</label>
        <input onChange={(e)=> setName(e.target.value)} type="text" name="name" id="name" className='w-full h-10 border-2 border-gray-50/50 outline-none pl-3 text-green-400' required />

        <label className="text-gray-50/30" htmlFor="email">Email :</label>
        <input onChange={(e)=> { const lowerText = e.target.value.toLowerCase(); setEmail(lowerText)}} value={email} type="email" name='email' id='email' required className='w-full h-10 border-2 border-gray-50/50 outline-none pl-3 text-green-400'/>
        
        <label className="text-gray-50/30" htmlFor="password">Create Password :</label>
        <input onChange={(e)=> setPassword(e.target.value)} type="password" name='password' id='password' required className='w-full h-10 border-2 border-gray-50/50 outline-none pl-3 text-green-400'/>
        <Link to="/Login" className='w-max' > Already a user!</Link>

        <button className='w-full h-10 text-white bg-green-600 rounded-3xl hover:bg-green-800'>Register</button>
    </form>
  )
}

export default Signup