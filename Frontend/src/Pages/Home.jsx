import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home({user}) {

  return (
    <div className='flex flex-col gap-3 h-[500px] w-[500px] bg-white/8 justify-center items-center rounded-4xl transition-all duration-300 hover:shadow-[0_0_40px_green]' >
      <Link style={{textDecoration:'none'}} to="/Signup" className='flex justify-center items-center w-30 h-8 shadow-[0_0_5px_black] rounded-2xl underline-none text-white hover:scale-110 transition-all duration-150 hover:shadow-[0_0_20px_green]'>SignUp</Link>
      <Link style={{textDecoration:'none'}} to="/Login" className='flex justify-center items-center w-30 h-8 shadow-[0_0_5px_black] rounded-2xl underline-none text-white hover:scale-110 transition-all duration-150 hover:shadow-[0_0_20px_green]'>Login</Link>
    </div>
  )
}

export default Home