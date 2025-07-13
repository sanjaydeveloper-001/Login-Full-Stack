import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'

function App() {

  return (
    <div className='flex justify-center items-center w-full h-[100vh] bg-black '>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
