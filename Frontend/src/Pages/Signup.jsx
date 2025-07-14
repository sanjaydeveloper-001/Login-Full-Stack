import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { IoExitOutline , IoEyeOffOutline , IoEyeOutline } from "react-icons/io5";

function Signup({ setCreateProfile }) {

    const navigate = useNavigate();


    const [name , setName ] = useState ("");
    const [email , setEmail ] = useState ("");
    const [password , setPassword ] = useState ("");
    const [error , setError] = useState(null)
    const [passType , setPassType] = useState('password');

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
    <>
    <Link to="/" className=' fixed right-5 top-5 '>{<IoExitOutline className='text-3xl text-red-500 hover:text-white'/>}</Link>
    <form onSubmit={handleSubmit} className='w-[350px] md:h-max md:w-[400px] h-max bg-white/8 rounded-4xl p-5 flex flex-col gap-2 transition-all duration-300 hover:shadow-[0_0_40px_green]'>

        <div className='mb-3'>
          <h1 className='text-3xl text-white '>SignUp!</h1>
          {error ? <p className='text-red-600'>{error}</p> : ''}

        </div>
        <label className="text-gray-50/30" htmlFor="">Name:</label>
        <input onChange={(e)=> {setName(e.target.value) ;setError(false)}} type="text" name="name" id="name" className='w-full h-10 border-2 border-gray-50/50 outline-none pl-3 text-green-400' required />

        <label className="text-gray-50/30" htmlFor="email">Email :</label>
        <input onChange={(e)=> { const lowerText = e.target.value.toLowerCase(); setEmail(lowerText) ; setError(false)}} value={email} type="email" name='email' id='email' required className='w-full h-10 border-2 border-gray-50/50 outline-none pl-3 text-green-400'/>
        
        <label className="text-gray-50/30" htmlFor="password">Create Password :</label>
        <div className='relative flex w-full h-max items-center'>
        <input onChange={(e)=> {setPassword(e.target.value) ; setError(false)}} type={passType} name='password' id='password' required className='w-full h-10 border-2 border-gray-50/50 outline-none pl-3 text-green-400'/>
        { passType === 'password' ?
          <IoEyeOffOutline className="text-white text-xl absolute right-4 cursor-pointer" onClick={()=> setPassType('text')} />
          : <IoEyeOutline className="text-white text-xl absolute right-4 cursor-pointer" onClick={()=> setPassType('password')} />
        }
        </div>
        <Link to="/Login" className='w-max' > Already a user!</Link>

        <button className='w-full h-10 text-white bg-green-600 rounded-3xl hover:bg-green-800'>Register</button>
    </form>
    </>
  )
}

export default Signup