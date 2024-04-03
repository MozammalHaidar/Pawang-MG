import React, { useState } from 'react'
import { MdError } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Practice = () => {
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [passwordShow,setPasswordShow]=useState(false);
    let [check,setCheck]=useState(false);
    let [emailerror,setEmailError]=useState("");
    let [passworderror,setPasswordError]=useState("");


    function handleEmail(e){
        setEmail(e.target.value);
        setEmailError("");
    };

    function handlePassword(e){
        setPassword(e.target.value);
        setPasswordError("");
    };

    let handleCheckbox=(e)=>{
      setCheck(e.target.checked);
    };
    let handleSubmit=(e)=>{
        e.preventDefault();

      if(!email){
        setEmailError("Email is required");
      };
      if(!password){
        setPasswordError("Password is required");
      };
    }

  return (
    <div className='max-w-container mx-auto bg-orange-700 pl-[100px] pr-[100px]'>
      <h2 className='pt-10 pb-10 text-bold text-white text-center'>Contact Me</h2>
      <form className="max-w-xl mx-auto pt-10 pb-10">
  <div className="mb-5">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your email
    </label>
    <input onChange={handleEmail}
      type="email"
      id="email"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Input Your Email"
      required=""
    />
    {emailerror &&(
      <h2 className="text-red-700 text-center mt-2 flex gap-2"><MdError className="mt-1"/> {emailerror}</h2>
    )}
  </div>
  <div className="mb-5">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your password
    </label>
    <div className="relative">
    <input onChange={handlePassword}
      type={passwordShow?"text" : "password"}
      id="password"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Input Your Password"
      required=""
    />
    {passwordShow?(
      <FaEye onClick={()=>setPasswordShow(false)} className="absolute top-3 right-3"/>
    ):(
      <FaEyeSlash onClick={()=>setPasswordShow(true)} className="absolute top-3 right-3"/>
    )
    } 
    </div>
    {passworderror && (
      <h2 className="text-red-700 text-center mt-2 flex gap-2"><MdError className="mt-1"/>{passworderror}</h2>
    )}
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input onChange={handleCheckbox}
        id="remember"
        type="checkbox"
        defaultValue=""
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        required=""
      />
    </div>
    <label
      htmlFor="remember"
      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Remember me
    </label>
  </div>
  <button onClick={handleSubmit}
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
</form>

    </div>
  )
}

export default Practice
