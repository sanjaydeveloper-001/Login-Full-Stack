import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col gap-3' >
      <Link to="/Signup" className='flex px-2 py-1 bg-white rounded-2xl underline-none'>SignUp</Link>
      <Link to="/Login" className='flex px-2 py-1 bg-white rounded-2xl underline-none'>Login</Link>
    </div>
  )
}

export default Home