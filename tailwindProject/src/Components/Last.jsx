import React from 'react'
import logo from "../assets/logo.png";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Last = () => {
  return (
   

   
    <div className="max-w-container mx-auto bg-black pl-[100px] pr-[100px]">
        <div className="flex justify-between pt-3  pb-[42px]">

        <img className="w-[97px] h-[59px] "src={logo} alt="" />
        <h4 className="text-white ml-[450px]">+91 12345 09876</h4>
        <h4 className="text-white ">info@example.com</h4>
        <div className="flex gap-[20px] mr-2">
        <FaGithubSquare className="w-[30px] h-[30px] bg-white p-[5px] rounded-[50%]"/>
        <FaTwitter className="w-[30px] h-[30px] bg-white p-[5px] rounded-[50%]"/>
        <FaLinkedinIn className="w-[30px] h-[30px] bg-white p-[5px] rounded-[50%]"/>
        </div>

        </div>
        <div className="flex justify-between border-t	border-[#ffffff] pt-[60px] pb-[100px]">
        <ul className="flex gap-[55px] font-dm text-xl leading-[26px] text-lightGray ">
            <li>Home</li>
            <li>About</li>
            <li>Tech Stack</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <h3 className="text-white">Designed and built by <span className="text-blue-500">Pavan MG</span> with <span className="text-blue-500">Love</span> & <span className="text-blue-500">Coffee</span></h3>
        </div>

    </div>

    

  )
}

export default Last
