import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoExitOutline , IoEyeOffOutline , IoEyeOutline } from "react-icons/io5";

function Login({ setProfile , setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [passType , setPassType] = useState('password');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://login-full-stack-d2bl.onrender.com/Login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setError(res.data.message);
        if (res.data.message === "Success") {
          navigate("/");
          setProfile(true);
          setUser(res.data.name);
          localStorage.setItem("User" , res.data.name);
        }
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <>
    <Link to="/" className=' fixed right-5 top-5 '>{<IoExitOutline className='text-3xl text-red-500 hover:text-white'/>}</Link>
    <form
      onSubmit={handleSubmit}
      className="w-[350px] md:h-max md:w-[400px] bg-white/8 rounded-4xl p-5 flex flex-col gap-2 transition-all duration-300 hover:shadow-[0_0_40px_green]"
    >
      <div className="h-max mb-3">
        <h1 className="text-xl text-white">Login Here !</h1>
        {error ? <p className="text-red-600">{error}</p> : ""}
      </div>

      <label className="text-gray-50/30" htmlFor="mail">Email :</label>
      <input
      
        type="email"
        onChange={(e) => {
          const lowerText = e.target.value.toLowerCase();
          setEmail(lowerText);
          setError(false);
        }}
        value={email}
        required
        className="w-full h-10 border-2 border-gray-50/50 outline-none pl-3 text-green-400"
      />

      <label className="text-gray-50/30" htmlFor="password">Password :</label>
      <div className="h-max w-full flex items-center relative">
        <input           
          type={passType}
          onChange={(e) =>{ setPassword(e.target.value); setError(false);}}
          required
          className="w-full h-10 border-2 border-gray-50/50 outline-none pl-3 text-green-400"
        />
        { passType === 'password' ?
          <IoEyeOffOutline className="text-white text-xl absolute right-4 cursor-pointer" onClick={()=> setPassType('text')} />
          : <IoEyeOutline className="text-white text-xl absolute right-4 cursor-pointer" onClick={()=> setPassType('password')} />
        }
      </div>
      

      <Link to="/Signup" className="w-max">
        Create New!
      </Link>

      <button className="w-full h-10 text-white bg-green-600 rounded-3xl hover:bg-green-800">
        Login
      </button>
    </form>
    </>
  );
}

export default Login;
