import React from "react";
import { herobg } from "../assets";
import {FaApple , FaGooglePlay} from 'react-icons/fa'


const Hero = () => {
  return (
    <div className=" mt-[4rem] flex hero__bg px-[1.5rem] md:px-[5rem] py-[2rem] items-center flex-col gap-[2rem] md:gap-0 md:flex-row w-full">
      <div className="flex-1 w-full flex flex-col gap-[2rem] ">
        <div className="flex flex-col items-start w-full text-center md:w-3/4">
          <h1 className="text-4xl md:text-6xl text-center md:text-left text-black">
            Run your payroll <span className="text-yellow-400">Easily</span> in <span className="text-red-400">Seconds</span></h1>

          <p className=" text-center w-full text-xl md:text-left md:w-3/4 Poppins leading-10 ">
            We’ve built an all-inclusive simple solution for individual and
            businesses to manage staff, pay salaries, bills, and relevant taxes
            all at once.
          </p>

          <button className="self-center md:self-start px-[2rem] md:px-[4rem] mt-4 py-4 Poppins rounded-full bg-primary-green text-white">
            Start Using Free, Forever
          </button>
        </div>

        <div>
          <p className="text-center md:text-left font-bold tracking-wide Poppins">Download the EaziPay App</p>
     
     <div className="flex gap-5 Poppins  items-center mt-4">
           <button className="px-2 py-2 gap-5 bg-white justify-between flex items-center shadow-md ">
            <div style={{borderRadius:'50%'}} className=" bg-gray-200 rounded-full w-[50px] h-[50px] flex items-center justify-center">
<FaApple fontSize={24} />
            </div>
            <p className="Poppins basis-2/3 text-left text-sm">Download on App Store </p>
            
          </button>
          <button className="px-2 py-2 bg-white flex items-center shadow-md ">
            <div className="flex-1">
<FaGooglePlay fontSize={24} />
            </div>
            <p className="Poppins flex-1 text-left text-sm">Download on App Store </p>
            
          </button>
     </div>
       
   
        </div>
      </div>

      <div className="flex-1 w-[871px] h-[670px] ">
        <img className="w-full h-full" src={herobg} />
      </div>
    </div>
  );
};

export default Hero;
