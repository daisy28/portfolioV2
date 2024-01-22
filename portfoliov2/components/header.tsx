"use client";
import React, { useState } from 'react';
import style from "./style.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CgMenuRightAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { TiBriefcase } from "react-icons/ti";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  return (
    <header className={`${style._background}`}>
      <div className={`p-4 mb-10`}>
        <nav className={`md:flex justify-between items-center`}>
          <div className={`flex justify-between items-center`}>
            <div>
            <Link href="/">
              <Image 
                src="/Logo2.png"
                width={20}
                height={20}
                unoptimized
                alt="Logo"
                className={`w-[25%] h-[25%] md:w-[100px]`}
              />
            </Link>
          </div>

          <button onClick={() => setToggle(prevState => !prevState)} className={`pr-6 md:hidden`}>
            <Link href="" className={`hidden`}>menu</Link>
            {toggle ?
              <MdClose className={`text-[#d8d8d8] hover:transition-all hover:delay-300 hover:duration-300 hover:text-[#02dac5] font-[500] text-[1.8rem] cursor-pointer`}/> : 
              <CgMenuRightAlt className={`text-[#d8d8d8] hover:transition-all hover:delay-300 hover:duration-300 hover:text-[#02dac5] font-[500] text-[1.8rem] cursor-pointer`} />}
          </button>
          </div>
          

          <div className={`flex flex-col gap-10 items-end text-right my-4 pr-6 text-[12px] md:flex-row md:justify-between md:items-center md:w-[85%]`}>
            <div className={`font-[500] text-[#d8d8d8] ${toggle ? `flex flex-col gap-6` : `hidden md:flex md:flex-row md:justify-center gap-8 md:items-center md:w-[80%]`} `}>
            <Link href="/" className={`hover:text-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300 ${pathname === "/" ? `text-[#02dac5]` : `text-[#d8d8d8]`}`}>Home</Link>
            <Link href="#featured project" className={`hover:text-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300 ${pathname === "#featured project" ? `text-[#02dac5]` : `text-[#d8d8d8]`}`}>Featured projects</Link>
            <Link href="#about me" className={`hover:text-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300 ${pathname === "#about me" ? `text-[#02dac5]` : `text-[#d8d8d8]`}`}>About me</Link>
            <Link href="#contact" className={`hover:text-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300 ${pathname === "#contact" ? `text-[#02dac5]` : `text-[#d8d8d8]`}`}>Contact</Link>
          </div>

          <div className={`mt-6 ${toggle ? ` flex flex-col gap-6` : `hidden md:flex md:flex-row md:justify-end md:items-center md:w-[25%] md:mt-0 md:ml:auto`}`}>
              <button className={`bg-[#02dac5] rounded-[4px] flex gap-2 items-center p-3 py-2 text-[#131313] text-[12px] font-[600]  hover:bg-[#d8d8d8]   hover:transition-all hover:delay-300 hover:duration-300`}>
                <Link href="">View Resume</Link>
                <TiBriefcase className={`text-[16px]`} />
            </button>
          </div>
          </div>
          
        </nav>
      </div>

      <section className={`p-4 text-center`}>
        <div className={`mb-10`}>
          <h1 className={`text-[#d8d8d8] font-[500] leading-[42px] text-[1.2rem] mb-2 tracking-[2px]`}>Hi, I am <span className={`text-[1.4rem] text-[#02dac5]`}>Gloria Ubah</span></h1>
        <p className={`text-[#d8d8d8] font-[400] leading-[32px] text-[1rem] mb-2`}>A seasoned <span className={` text-[#02dac5]`}>Frontend Developer</span> transforming ideas into stunning digital experiences. Let&apos;s create something amazing!</p>
        </div>
        
        <div className={`w-[75%] md:w-[30%] mx-auto my-10 flex justify-between items-center`}>
          <button className={`w-[40px] h-[40px] rounded-full bg-[#d8d8d8] flex justify-center items-center hover:bg-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300`}>
            <Link href="" className={`hidden`}>Github</Link>
            <FaGithub />
          </button>
          <button className={`w-[40px] h-[40px] rounded-full bg-[#d8d8d8] flex justify-center items-center hover:bg-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300`}>
            <Link href="" className={`hidden`}>Github</Link>
            <BiLogoGmail />
          </button>
          <button className={`w-[40px] h-[40px] rounded-full bg-[#d8d8d8] flex justify-center items-center hover:bg-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300`}>
            <Link href="" className={`hidden`}>Github</Link>
            <FaTwitter />
          </button>
          <button className={`w-[40px] h-[40px] rounded-full bg-[#d8d8d8] flex justify-center items-center hover:bg-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300`}>
            <Link href="" className={`hidden`}>Github</Link>
            <FaLinkedinIn />
          </button>
        </div>
      </section>
    </header>
  )
}

export default Header;