import axios from "axios";
import React, { useActionState } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setProfile }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

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
        setError(res.data);
        if (res.data === "Success") {
          navigate("/");
          setProfile(true);
        }
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px] h-max bg-white/8 rounded-4xl p-5 flex flex-col gap-2 transition-all duration-300 hover:shadow-[0_0_40px_green]"
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
      <input
      
        type="password"
        onChange={(e) =>{ setPassword(e.target.value); setError(false);}}
        required
        className="w-full h-10 border-2 border-gray-50/50 outline-none pl-3 text-green-400"
      />

      <Link to="/Signup" className="w-max">
        {" "}
        Create New!
      </Link>

      <button className="w-full h-10 text-white bg-green-600 rounded-3xl hover:bg-green-800">
        Login
      </button>
    </form>
  );
}

export default Login;
