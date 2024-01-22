"use client";
import React, { useState } from 'react';
import style from "./style.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CgMenuRightAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { TiBriefcase } from "react-icons/ti";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  return (
    <header className={`${style._background}`}>
      <div className={`p-4`}>
        <nav className={``}>
          <div className={`flex justify-between items-center`}>
            <div>
            <Link href="/">
              <Image 
                src="/Logo2.png"
                width={20}
                height={20}
                unoptimized
                alt="Logo"
                className={`w-[25%] h-[25%]`}
              />
            </Link>
          </div>

          <button onClick={() => setToggle(prevState => !prevState)} className={`pr-6`}>
            <Link href="" className={`hidden`}>menu</Link>
            {toggle ?
              <MdClose className={`text-[#e1e1e1] hover:transition-all hover:delay-300 hover:duration-300 hover:text-[#02dac5] font-[500] text-[1.8rem] cursor-pointer`}/> : 
              <CgMenuRightAlt className={`text-[#e1e1e1] hover:transition-all hover:delay-300 hover:duration-300 hover:text-[#02dac5] font-[500] text-[1.8rem] cursor-pointer`} />}
          </button>
          </div>
          

          <div className={`flex flex-col gap-10 items-end text-right my-4 pr-4 text-[14px]`}>
            <div className={`font-[500] text-[#e1e1e1] ${toggle ? ` flex flex-col gap-6` : `hidden`}`}>
            <Link href="/" className={`hover:text-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300 ${pathname === "/" ? `text-[#e1e1e1]` : `text-[#02dac5]`}`}>Home</Link>
            <Link href="#featured project" className={`hover:text-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300 ${pathname === "#featured project" ? `text-[#e1e1e1]` : `text-[#02dac5]`}`}>Featured projects</Link>
            <Link href="#about me" className={`hover:text-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300 ${pathname === "#about me" ? `text-[#e1e1e1]` : `text-[#02dac5]`}`}>About me</Link>
            <Link href="#contact" className={`hover:text-[#02dac5] hover:transition-all hover:delay-300 hover:duration-300 ${pathname === "#contact" ? `text-[#e1e1e1]` : `text-[#02dac5]`}`}>Contact</Link>
          </div>

          <div className={`mt-6 ${toggle ? ` flex flex-col gap-6` : `hidden`}`}>
              <button className={`bg-[#02dac5] rounded-[4px] flex gap-2 items-center p-3 py-2 text-[#131313] text-[12px] font-[600]  hover:bg-[#e1e1e1]   hover:transition-all hover:delay-300 hover:duration-300`}>
                <Link href="">View Resume</Link>
                <TiBriefcase className={`text-[16px]`} />
            </button>
          </div>
          </div>
          
        </nav>
      </div>
    </header>
  )
}

export default Header;