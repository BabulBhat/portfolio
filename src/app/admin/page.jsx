"use client";
import { useState } from "react";

export default function Login() {
  const [login, setlogin] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogin({
      ...login,
      [name]: value,
    });
  };
  const handleSave = async() => {
    const response = await fetch(`http://localhost:3000/api/admin/login`,{
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login)
    });
    const result = await response.json();
    
    console.log(result);
  };
  return (
    <div className="login flex items-center justify-center h-screen">
      <div className="bg-gray-300 p-4  max-w-[300px] w-full rounded shadow-md">
        <h4 className="text-2xl font-bold uppercase">Login Admin</h4>
        <hr className="my-3" />
        <div className="">
          <label htmlFor="" className="my-2 block uppercase text-sm">
            Username
          </label>
          <input
            type="text"
            className="block py-2 border border-gray-400 w-full p-3 rounded focus:outline-none"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={login.username}
          />
        </div>
        <div className="">
          <label htmlFor="" className="my-2 block uppercase text-sm">
            Password
          </label>
          <input
            type="text"
            className="block py-2 border border-gray-400 w-full p-3 rounded focus:outline-none"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={login.password}
          />
        </div>
        <div className="mt-3 text-sm">
          <span>Create An Account? <button className="text-green-600 font-semibold ">Sign Up</button></span>
        </div>
        <div className="mt-4">
          <button
            className="bg-green-500 px-4 py-2 rounded text-sm font-bold border border-green-500 text-gray-800 hover:bg-green-600 hover:text-black"
            onClick={handleSave}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
