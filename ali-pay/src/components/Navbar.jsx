import React,{useState} from "react";
import { logo } from "../assets";
import {FaBars } from 'react-icons/fa'
import {BiX} from 'react-icons/bi'
import {Link} from 'react-router-dom'


const Navbar = () => {

  const [Visible, setVisible] = useState(false)


  return (
    <div className="px-[5rem] relative  top-0 z-50  w-full py-5 flex space-between gap-5 items-center">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="desktop hidden md:flex gap-[2rem] flex-1 justify-between">
        <div className="flex items-center Poppins flex-1 justify-around ">
          <a href="#" className="capitalize Poppins tracking-wide text-[16px]">Indiviual</a>
          <a href="#" className="capitalize Poppins tracking-wide text-[16px]">Business</a>
          <a href="#" className="capitalize Poppins tracking-wide text-[16px]">Pricing</a>
          <a href="#" className="capitalize Poppins tracking-wide text-[16px]">Set Your Payroll</a>
        </div>
        <div className="basis-1/3 flex gap-5 items-center">
          {" "}
          <Link to='/dashboard' className="px-[4rem] Poppins rounded-full text-primary-green bg-white font-bold tracking-wide border-primary-green border-2 py-3">Log in</Link>
          <Link to='/dashboard' className="px-[4rem] Poppins text-white shadow-md font-bold tracking-wide rounded-full bg-primary-green py-3">Register</Link>
        </div>
      </div>
      <div className="mobile flex-1 justify-end flex md:hidden">
        <div>
<FaBars className={`${Visible?'hidden': 'block'}`} onClick={() => setVisible(prev => !prev)} fontSize={24} />
<BiX className={`${Visible?'block': 'hidden'}`} onClick={() => setVisible(prev => !prev)} fontSize={32} />
        </div >
        <div className={` ${Visible?'flex':'hidden'} w-[350px] px-[2rem] py-5  absolute flex-col h-[450px] bg-white shadow-lg -bottom-[470px] rounded-lg`}>
        <div className="flex flex-col items-start Poppins flex-1 justify-around ">
          <a href="#" onClick={() => setVisible(prev => !prev)} className="capitalize Poppins tracking-wide text-[24px]">Indiviual</a>
          <a href="#" onClick={() => setVisible(prev => !prev)} className="capitalize Poppins tracking-wide text-[24px]">Business</a>
          <a href="#" onClick={() => setVisible(prev => !prev)} className="capitalize Poppins tracking-wide text-[24px]">Pricing</a>
          <a href="#" onClick={() => setVisible(prev => !prev)} className="capitalize Poppins tracking-wide text-[24px]">Set Your Payroll</a>
        </div>
        <div className=" flex flex-col items-start gap-5 ">
          {" "}
          <button className="px-[4rem] Poppins rounded-full text-primary-green bg-white font-bold tracking-wide border-primary-green border-2 py-3">Log in</button>
          <button className="px-[4rem] Poppins text-white shadow-md font-bold tracking-wide rounded-full bg-primary-green py-3">Register</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
