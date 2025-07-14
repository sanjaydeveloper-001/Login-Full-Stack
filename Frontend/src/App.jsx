import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import { useEffect, useState } from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify';

function App() {

  const [profile , setProfile] = useState(false);
  const [createProfile , setCreateProfile] = useState(false);
  const [user , setUser] = useState("");

  useEffect(()=>{
    if(profile){
      toast.success('Login Succesfully !');
      setProfile(false);
    }
    if(createProfile){
      toast.success('Registered !');
      setCreateProfile(false);
    }
  },[profile , createProfile]);


  return (
    
    <div className='flex justify-center items-center w-full h-[100vh] bg-black '>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/Login" element={<Login setProfile={setProfile} setUser={setUser} />} />
            <Route path="/Signup" element={<Signup setCreateProfile={setCreateProfile} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
