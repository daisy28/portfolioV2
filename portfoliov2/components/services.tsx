import React from 'react';
import { BsCodeSlash, BsCurrencyBitcoin } from 'react-icons/bs';
import { HiPencilAlt } from "react-icons/hi";
import style from "./style.module.css";

const Services = () => {

     const data = [
          {
               id: `01`,
               heading: `Web Development`,
               info: `I use my knowledge of various programming language such as Javascript, React, NextJS, Typescript, HTML5, CSS3, Tailwind... to build digital solutions for users.`
          },
          {
               id: `02`,
               heading: `Crypto Trading`,
               info: `I use my knowledge of various programming language such as Javascript, React, NextJS, Typescript, HTML5, CSS3, Tailwind... to build digital solutions for users.`
          },
          {
               id: `03`,
               heading: `Content Creation`,
               info: `I use my knowledge of various programming language such as Javascript, React, NextJS, Typescript, HTML5, CSS3, Tailwind... to build digital solutions for users.`
          },
     ]

  return (
    <section className={`text-center`}>
            <h1 className={`uppercase text-[10px] font-[400] text-[#535353] mb-1`}>services</h1>
            <p className={`text-[18px] font-[500] text-[#d3d3d3] leading-[32px] mb-4 tracking-[1px]`}>What <span className={`text-[#02dac5]`}>I do</span>.</p>
            
            <div className={`grid grid-cols-1 md:w-[70%] my-8 mx-auto lg:w-[100%] lg:grid-cols-3 gap-[1.5rem]`}>
                 {
                      data.map(item => {
                           return (
                                <article key={item.id} className={`rounded-[4px] border border-[#02dac5] bg-[#262626] p-6 md:p-10 hover:bg-[#02dac5]  hover:transition-all hover:delay-300 hover:duration-300 `}>
                      <h2 className={`${style._index}  text-right ml-auto text-[42px] font-[600] text-[#2f2f2f]`}>{item.id}</h2>
                      <div className={`${style._icon_div} w-[25px] h-[25px] p-1 border-2 border-[#dddddd] rounded-full flex justify-center items-center mb-4`}>
                         {item.id === `01` && <BsCodeSlash className={`text-[#dddddd] font-[600] ${style._icon}`} />}
                         {item.id === `02` && <BsCurrencyBitcoin className={`text-[#dddddd] font-[600] ${style._icon}`} />}
                         {item.id === `03` && <HiPencilAlt className={`text-[#dddddd] font-[600] ${style._icon}`} />}
                      </div>

                      <div>
                           <h3 className={` ${style._heading} text-[#dddddd] text-[18px] tracking-[2px] font-[600] leading-[32px] text-left`}>{item.heading}</h3>
                           <div className={`bg-[#5b5b5b] w-[100px] h-[2px] rounded-[4px] my-4 ${style._divider}`}></div>
                           <p className={` ${style._card_info} text-[#dddddd] text-[14px] tracking-[2px] font-[400] leading-[28px] text-left `}>{item.info}</p>
                      </div>
                      
                 </article>
                           );
                      })
                 }
                 
            </div>
    </section>
  )
}

export default Services;