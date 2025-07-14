import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home({user , setUser }) {

  return (
    <div className='w-[380px] p-5 text-center flex flex-col gap-3 md:h-[350px] md:w-[500px] bg-white/8 justify-center items-center rounded-4xl transition-all duration-300 hover:shadow-[0_0_40px_green]' >

      {user ? 
      <>
        <h4 className='text-[50%]'>Welcome <span className='text-white/80'>{user}</span></h4> 
        <p className='text-2xl text-red-700 underline hover:underline hover:text-red-500 cursor-pointer' onClick={()=> {
          setUser(null);
          localStorage.setItem("User" , "");
        }} >Logout</p>
      </>
      : 
        <>
          <h3 className='text-white' style={{textShadow:"2px 2px 10px #027802"}} >Welcome to Our Platform!</h3>
          <p>Here to explore the MERN Login page !</p>
          <Link style={{textDecoration:'none'}} to="/Signup" className='flex justify-center items-center w-30 h-8 shadow-[0_0_5px_black] rounded-2xl underline-none text-white hover:scale-110 transition-all duration-150 hover:shadow-[0_0_20px_green]'>SignUp</Link>
          <Link style={{textDecoration:'none'}} to="/Login" className='flex justify-center items-center w-30 h-8 shadow-[0_0_5px_black] rounded-2xl underline-none text-white hover:scale-110 transition-all duration-150 hover:shadow-[0_0_20px_green]'>Login</Link>
        </>
}
    </div>
  )
}

export default Home