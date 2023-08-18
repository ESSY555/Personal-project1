import React from "react";
import { FaBars, FaSearch, FaFilter } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { elipse } from "../assets";
import {Ecards , BottomNav} from "../components";

const Settings = () => {
  return (
    <div className="flex flex-col mb-[1rem] items-center px-[4rem]">
      <div
        style={{ borderBottom: "1px solid lightgray" }}
        className="py-5 px-3 "
      >
        <h3 className="text-3xl text-primary-green ">EasiPay's Team</h3>
      </div>
      <div className="mt-8 rounded-xl text-white bg-primary-green w-full flex flex-col items-start  py-[2rem]  px-[3rem]">
        <p className="text-lg mb-3">Total Employee</p>
        <h3 className="font-bold text-3xl ">11264</h3>
      </div>

      <div className="w-full border-2 bg-white border-gray-200 mt-10 py-2 px-2 rounded-md flex gap-2">
        <button className="flex-1 bg-primary-green text-lg py-3 text-center px-3 text-white rounded-md">
          All Employee
        </button>
        <button className="flex-1 bg-gray-200 text-lg py-3 text-center px-3 text-primary-green rounded-md">
          Departments
        </button>
      </div>

      <div className="mt-4 w-full flex gap-5 items-center">
        <div className="border-2 justify-between rounded-xl w-full pr-4 border-gray-300 flex items-center py-4">
          <input type="text" className="text-lg px-4" placeholder="search" />
          <FaSearch />
        </div>
        <div className="py-4 px-6 rounded-md bg-gray-200">
          <FaFilter className="text-gray-400" />
        </div>
        <div></div>
      </div>

      <div className="mt-3 w-full flex justify-between items-center">
        <div className="flex items-center gap-5">
          <FaBars />
          <MdWindow />
          <p className="text-lg">Archived</p>
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" name="" id="" />
          <p className="text-lg">select all</p>
        </div>
      </div>
      <div className="mb-[4rem] w-full">
             <Ecards name={'Chika'} image={elipse} position={'Accountant'} gender={'male' }  amount={'N12,3455,666'}/>
      <Ecards name={'Chika'} image={elipse} position={'Accountant'} gender={'male' }  amount={'N12,3455,666'}/>
      <Ecards name={'Chika'} image={elipse} position={'Accountant'} gender={'male' }  amount={'N12,3455,666'}/>
      </div>

 
<BottomNav />
     
    </div>
  );
};

export default Settings;
