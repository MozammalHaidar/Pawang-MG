import React from 'react'
import vector1 from "../assets/Vector.png";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { IoMdGitMerge } from "react-icons/io";


const Tech = () => {
  return (
    <div className="max-w-container mx-auto bg-black pb-[214px] pt-[330px] pl-[100px] pr-[100px]">
      <h2 className="font-poppins text-[48px] font-bold  text-white text-center mb-[49px]">My Tech Stack</h2>
      <h4 className="font-normal font-poppins text-[32px] leading-[26px] text-white text-center"> Technologies I’ve been working with recently</h4>
    
    <div>
        <div className="grid grid-cols-6 grid-flow-row mt-[140px] gap-[50px]">
        <FaHtml5 className="text-orange-700 w-[120px] h-[120px]"/>
        <IoLogoCss3 className="text-blue-700 w-[120px] h-[120px]"/>
        <SiJavascript className="text-yellow-700 w-[120px] h-[120px]"/>
        <SiTailwindcss className="text-orange-700 w-[120px] h-[120px]"/>
        <img class="text-orange-700 w-[120px] h-[120px]"src={vector1} alt="" />
        <FaReact className="text-blue-700 w-[120px] h-[120px]"/>
        <FaSquareGithub className="text-white w-[120px] h-[120px]"/>
        <FaBootstrap className="text-gray-700 w-[120px] h-[120px]"/>
        <FaSass className="text-orange-700 w-[120px] h-[120px]"/>
        <TbBrandVscode className="text-blue-700 w-[120px] h-[120px]"/>
        <IoMdGitMerge className="text-orange-700 w-[120px] h-[120px]"/>
        <SiTailwindcss className="text-orange-700 w-[120px] h-[120px]"/>
        </div>
    </div>
    
    
    
    </div>
  )
}

export default Tech
