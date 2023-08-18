import React from "react";
import { doc, menu, money, sidep } from "../assets";
import { FaHome } from "react-icons/fa";
import {NavLink} from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className="flex md:hidden fixed bottom-0 h-[9vh] left-0 right-0   items-center justify-between shadow-md bg-white">
      <NavLink   to={'/dashboard'} className="group active:text-primary-green flex flex-col items-center gap-2">
        <FaHome className="group-active:text-primary-green" fontSize={30}  />
        <p className="group-active:text-primary-green">Home</p>
      </NavLink>

      <NavLink to={'/employee'} className="flex active:text-primary-green flex-col items-center gap-2">
        <img className="w-[30px]" src={sidep} alt="" />
        <p>Employee </p>
      </NavLink>
     
      <NavLink to={'/payroll'} className="flex active:text-primary-green flex-col items-center gap-2">
        <img className="w-[30px]" src={doc} alt="" />
        <p>Payroll </p>
      </NavLink>
       <NavLink to={'/loan'} className="flex active:text-primary-green flex-col items-center gap-2">
        <img className="w-[30px]" src={money} alt="" />
        <p>Loan</p>
      </NavLink>
      <NavLink to={'/profiles'} className='flex active:text-primary-green flex-col items-center gap-2'>
   <img className="w-[30px] filter grayscale" src={menu} alt="" /> 
   <p>Menu</p>
</NavLink>
    </div>
  );
};

export default BottomNav;
