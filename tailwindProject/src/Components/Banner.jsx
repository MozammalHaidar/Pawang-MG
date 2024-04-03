import React from 'react'
import bannerImage from "../assets/bannerImage.png";

const Banner = () => {
  return (
    <div className="max-w-container mx-auto bg-black pl-[100px] pr-[100px]">

    <div className="flex justify-between gap-[219px] pt-[220px]">
      <h1 className="text-white font-poppins leading-[70px] text-[58px] tracking-tight font-bold h-[350px]">Hi 👋,<br/>
          My name is<br/>
          <span className="text-blue-500">Pavan MG</span><br/>
          I build things for web</h1>
      <img className=""src={bannerImage} alt="" />
    </div>
    </div>
  )
}

export default Banner
