import React from 'react'
import logo from "../assets/logo.png";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-container mx-auto bg-black pl-[100px] pr-[100px]">
        <div className="flex justify-between pt-3">
        <img className="w-[97px] h-[59px]"src={logo} alt="" />
        <ul className="flex gap-[55px] font-dm text-xl leading-[26px] text-lightGray">
            <li>Home</li>
            <li>About</li>
            <li>Tech Stack</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className="flex gap-[20px] mr-2">
        <FaGithubSquare className="w-[30px] h-[30px] bg-white p-[5px] rounded-[50%]"/>
        <FaTwitter className="w-[30px] h-[30px] bg-white p-[5px] rounded-[50%]"/>
        <FaLinkedinIn className="w-[30px] h-[30px] bg-white p-[5px] rounded-[50%]"/>
        </div>
       
        </div>
      </div>
    </nav>
  )
}

export default Navbar
