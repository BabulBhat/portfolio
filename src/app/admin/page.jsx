"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginauth } from "../redux/admin/login/loginSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Login() {
  const [data, setdata] = useState({
    username: "",
    password: "",
    login: true
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };
  const handleSave = async () => {
    const { username, password } = data;
    if (username == "" && password == "") {
      toast.error("All Filed Required");
    }
    else {
      const user = await dispatch(loginauth(data));
      if (user.payload.success !== false) {
        localStorage.setItem('token', user.payload.token)
        toast.success('Login Successfully');
        router.push('/admin/dashboard');
      }
      else {
        toast.error("Login Failed");
      }
    }

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
            value={data.username}
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
            value={data.password}
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
